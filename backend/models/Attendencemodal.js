const mongoose = require("mongoose");

const date = new Date();
const AttendenceSchema = mongoose.Schema({
  Date: {
    type: String,
    default: new Date().toISOString(),
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
      attendenceStatus: {
        type: String,
        default: date.getDay() + "" + date.getMonth() + "" + date.getFullYear(),
      },
    },
  ],
});

const Attendence = mongoose.model("Attendence", AttendenceSchema);

module.exports = Attendence;
