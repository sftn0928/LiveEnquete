const mongoose = require('mongoose'),
  { Schema } = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');
const randToken = require('rand-token');

const userSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  channelUrl: {
    type: String
  },
  slots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Slot' }]
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  hashField: 'password'
});

userSchema.pre('save', function(next) {
  let user = this;
  if (!user.apiToken) user.apiToken = randToken.generate(16);
  next();
});

module.exports = mongoose.model('User', userSchema);
