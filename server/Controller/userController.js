const User = require('../models/User');
const mongoose = require('mongoose');
const _ = require('lodash');
const { Maybe, Either } = require('../library/monads');
const passport = require('passport');
const { checkSchema, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

console.log(typeof checkSchema);
const isNext = (next, monad, obj) => {
  return _.isEmpty(next) ? monad(obj) : next();
};
const fs = require('fs');

const flashMonad = (key, monad, obj, message) => {
  if (typeof obj === 'object') {
    obj.res.cookie();
    isNext(obj.next, monad, obj);
  }
};

const flashLeft = _.curry(flashMonad, 'error', Maybe.nothing);
const flashRight = _.curry(flashMonad, 'success', Maybe.just);

let getUserParams = req => {
  return {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    channelURL: req.body.channelURL
  };
};

let isUser = (obj, R, L) => {
  return _.isEmpty(obj.user) ? flashLeft(obj, L) : flashRight(obj, R);
};

module.exports = {
  create(req, res, next) {
    if (req.skip) next();

    let newUser = new User(getUserParams(req));
    console.log(newUser);
    User.register(newUser, req.body.password, (error, user) => {
      let obj = {
        error,
        user,
        req,
        next
      };
      console.log(error, user);
      isUser(
        obj,
        `${user}'s account created Success`,
        `Failed to create user account because: ${error}`
      );
      res.send('success');
    });
  },
  show(req, res, next) {
    console.log(req.params.id);
    let userParams = req.params.id;
    User.findById(userParams)
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        console.log(`Error fetching user by id: ${err.message}`);
        next(err);
      });
  },
  update(req, res, next) {
    let userId = req.params.Id;
    userParams = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    User.findOneAndUpdate(userId, {
      $set: userParams
    })
      .then(() => {
        next();
      })
      .catch(err => {
        console.log(`Error updating user by ID: ${err.message}`);
        next(err);
      });
  },
  delete(req, res, next) {
    let userId = req.params.id;
    User.findByIdAndRemove(userId)
      .then(() => {
        next();
      })
      .catch(err => {
        console.log(`Error deleting user by ID: ${err.message}`);
        next();
      });
  },
  authenticate: passport.authenticate('local', {
    failureFlash: 'Failed to Login',
    successFlash: 'Logged in'
  }),
  checkValidate: checkSchema({
    name: {
      in: ['body'],
      isString: true,
      notEmpty: true,
      errorMessage: '不正な名前です'
    },
    password: {
      isLength: {
        errorMessage: 'Password should be at least 7 chars long',
        options: { min: 7 }
      }
    },
    email: {
      trim: true,
      isEmail: {
        errorMessage: '不正なメールアドレスです。'
      },
      isLowercase: true
    }
  }),
  logout(req, res, next) {
    req.logout();
    req.flash('success', 'you have been logged out!');
    next();
  },
  verifyToken(req, res, next) {
    let token = req.query.token;
    if (token) {
      User.findOne({ apiToken: token })
        .then(user => {
          if (user) next();
          else next(new Error(error.message));
        })
        .catch(error => {
          next(new Error(error.message));
        });
    } else {
      next(new Error('Invalid API token!!'));
    }
  }

  // csrfCreate(req, res) {
  //   let secret = tokens.secretSync();
  //   let token = tokens.create(secret);
  //   req.session._csrf = secret;
  //   res.cookie('_csrf', token);
  //   console.log('getlogin');
  // },
  // csrfCompare(req, res) {
  //   let secret = req.session._csrf;
  //   let token = req.cookies._csrf;
  //   console.log('postlogin');
  //   if (tokens.verify(secret, token) === false) {
  //     throw new Error('Invalid Token');
  //   }
  //   delete req.session._csrf;
  //   res.clearCookie('_csrf');
  // }
};
