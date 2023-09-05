const mongoose = require("mongoose");

const AttendenceSchema = mongoose.Schema({
  Date: {
    type: String,
    default: new Date(),
  },
  Class: {
    type: String,
  },
  Div: {
    type: String,
  },
  Year: {
    type: String,
  },
  Time: {
    type: String,
  },
  Teacher: {
    type: String,
  },
  Subject: {
    type: String,
  },
  StudentData: [
    {
      name: String,
      rollno: String,
      attendenceStatus: String,
    },
  ],
});

const Attendence = mongoose.model("Attendence", AttendenceSchema);

module.exports = Attendence;
