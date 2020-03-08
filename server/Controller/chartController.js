const Chart = require('../models/chart');
const mongoose = require('mongoose');
const _ = require('lodash');
const { Maybe, Either } = require('../library/monads');
const User = require('../models/User');

const getChartPrams = body => {
  return {
    title: body.title,
    collects: body.collects
  };
};

module.exports = {
  create(req, res, next) {
    let userId = req.body.userId;
    Chart.create(getChartParams(req.body))
      .then(chart => {
        User.findById(userId).then(user => {
          user.charts.push(chart);
          user.save();
          next();
        });
      })
      .catch(err => {
        next(err);
        console.log(err.message);
      });
  },
  show(req, res) {
    let chartsId = req.locals.chartsId;
    let charts = chartsId.map(async chartId => {
      return await Chart.findById(chartId);
    });
    res.send(charts);
  },
  update(req, res, next) {
    let chartId = req.body.id;
    Chart.findOneAndUpdate(chartId, {
      $set: getChartParams(req.body)
    })
      .then(() => {
        next();
      })
      .catch(err => {
        next(err);
        console.log(err.message);
      });
  },
  delete(req, res, next) {
    let chartId = req.body.id;
    Chart.findByIdAndRemove(chartId)
      .then(() => {
        next();
      })
      .catch(err => {
        console.log(err.message);
        next(err);
      });
  }
};
