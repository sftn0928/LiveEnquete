const mongoose = require('mongoose'),
  { Schema } = require('mongoose');

const chartSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    collects: {
      type: Object
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Chart', chartSchema);
