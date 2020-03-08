const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const methodOverride = require('method-override');
const passport = require('passport');
const redis = require('redis');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const { check, validationResult } = require('express-validator');
const connectFlash = require('connect-flash');
const User = require('./models/User');
const csrf = require('csurf');
const jwt = require('jsonwebtoken');
const { Strategy, ExtractJwt } = require('passport-jwt');
const fs = require('fs');
const privatekey = fs.readFileSync(__dirname + '/assets/keys/private.key', {
  encoding: 'utf8'
});

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: privatekey,
  session: false,
  jsonwebtoken: {
    algorithm: 'RS256'
  }
};

const generateToken = (payLoad, userId) => {
  return jwt.sign(payLoad, privatekey, {
    subject: userId.toString()
  });
};

const userController = require('./Controller/userController');

app.set('port', process.env.PORT || 3001);
try {
  mongoose.connect('mongodb://mongo:27017/User_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  mongoose.connect('mongodb://localhost:27017/User_db');
}
mongoose.set('useCreateIndex', true);

// app.use(
//   methodOverride('_method', {
//     methods: ['POST', 'GET']
//   })
// );

// app.use(userController.verifyToken);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(csrf({ cookie: true }));
app.use(cookieParser('secret_passcode'));
app.use(
  expressSession({
    secret: 'secret_passcode',
    cookie: {
      maxAge: 4000000
    },
    resave: false,
    saveUninitialized: true
  })
);
app.use(connectFlash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport.use(
//   new Strategy(opts, (jwtPayload, done) => {
//     if (
//       jwtPayload === undefined ||
//       jwtPayload.name === undefined ||
//       jwtPayload.email === undefined
//     ) {
//       return done('Invalid JWT Payload', false);
//     } else {
//       return done(undefined, jwtPayload);
//     }
//   })
// );

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  res.locals.flashMessages = req.flash();
  next();
});

app.post('/', function(req, res) {
  console.log('hello', req.body);
  res.send('HelloWorld');
});

app.get('/', (req, res) => {
  console.log('hello');
  res.send('ok');
});

app.get('/', function(req, res) {
  console.log('hello', req.body);
  res.send('HelloWorld');
});

// app.get('/login', userController.csrfCreate);
app.post('/login', userController.authenticate, (req, res) => {
  const payload = {
    name: req.user.name,
    email: req.user.email,
    id: req.user._id
  };
  let token = generateToken(payload, req.user._id);
  // res.setHeader('Set-Cookie', `jwt=${token}`);
  res.cookie('jwt', token, { maxAge: 6000000, httpOnly: false });
  res.json({
    success: true,
    id: req.user._id
  });
});

app.get('/login', (req, res) => {
  console.log('login req');
  res.send('OK');
});

app.get(
  '/getId',
  (req, res, next) => {
    let token = req.cookies.jwt;
    if (!token) {
      return res.status(403).send({
        success: false,
        message: 'No token provided'
      });
    }
    jwt.verify(token, privatekey, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message: 'Invalid token'
        });
      }
      req.decoded = decoded;
      next();
    });
  },
  (req, res) => {
    console.log(req.decoded.id, 'data');
    res.send(req.decoded);
  }
);

app.get('/id/:id/User', userController.show);

app.post('/createUser', userController.create);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
