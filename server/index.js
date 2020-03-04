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

app.get('/', function(req, res) {
  console.log('hello', req.body);
  res.send('HelloWorld');
});

// app.get('/login', userController.csrfCreate);
app.post('/login', userController.authenticate, (req, res) => {
  res.send(req.user._id);
});

app.get('/id/:id/User', userController.show);

app.post('/createUser', userController.create);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
