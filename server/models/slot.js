const mongoose = require("mongoose"),
  { Schema } = mongoose;

const slotSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    items: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Slot", slotSchema);
//もしかしたら アンケート結果をresults:[{}]で結びつけるかもしれない
