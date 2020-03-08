const Slot = require('../models/slot');
const mongoose = require('mongoose');
const _ = require('lodash');
const User = require('../models/User');

const getSlotParams = body => {
  return {
    title: body.title,
    items: body.items
  };
};

module.exports = {
  create(req, res, next) {
    // let newSlot = new Slot(getSlotParams(req.body));
    let userId = req.body.userId;
    Slot.create(getSlotParams(req.body))
      .then(slot => {
        User.findById(userId).then(user => {
          user.slots.push(slot);
          user.save();
          res.send(slot._id);
        });
      })
      .catch(err => {
        next(err);
        console.log(err.message);
      });
  },
  show(req, res) {
    let slotsId = req.locals.slotsId;
    let slots = slotsId.map(async slotId => {
      return await Slot.findById(slotId);
    });
    res.send(slots);
  },
  update(req, res, next) {
    let slotId = req.body.id;
    Slot.findOneAndUpdate(slotId, {
      $set: getSlotParams(req.body)
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
    let slotId = req.body.id;
    Slot.findByIdAndRemove(slotId)
      .then(() => {
        next();
      })
      .catch(err => {
        console.log(err.message);
        next(err);
      });
  }
};
