const mongoose = require("mongoose"),
  { Schema } = mongoose;

userSchema = new Schema({
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
  }
});

userSchema.pre("save", function(next) {
  let user = this;
});
