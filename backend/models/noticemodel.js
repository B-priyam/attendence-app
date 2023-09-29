const mongoose = require("mongoose");

const noticeSchema = mongoose.Schema({
  notice: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: new Date(),
  },
  Time: {
    type: String,
    default: new Date().getTime(),
  },
});

const noticemodel = mongoose.model("Notice", noticeSchema);

module.exports = noticemodel;
