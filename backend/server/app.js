const express = require("express");
require("./conn.js");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });
const PORT = process.env.PORT;
const students = require("../models/studentmodal.js");
const Teachers = require("../models/teachermodal.js");
const TT = require("../models/Timetablemodal.js");
const Attendence = require("../models/Attendencemodal.js");
const bcrypt = require("bcrypt");
const { LocalStorage } = require("node-localstorage");
var localStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
// const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("", (req, res) => {
  // res.cookie("name", "priyam");
  localStorage.setItem("user", "hello");

  res.send("hello world");
});

app.post("/students", (req, res) => {
  const { name, Roll_no, Id_no, clas, div, year, email, password, profilePic } =
    req.body;
  const data = new students({
    name,
    Roll_no,
    Id_no,
    profilePic,
    clas,
    div,
    year,
    email,
    password,
  });
  data
    .save()
    .then(() => {
      return res.status(201).json({ data: "Student added successfully" });
    })
    .catch((e) => {
      return res.status(400).json(e.message);
    });
});

app.post("/teachers", async (req, res) => {
  try {
    const { UID, name, email, password, profilePic } = req.body;

    const data = new Teachers({
      UID,
      name,
      email,
      password,
      profilePic,
    });
    await data.save();
    res.status(201).json({ message: req.body });
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/post/TT", (req, res) => {
  const { clas, year, day, time, Timetable } = req.body;

  const data = new TT({
    clas,
    year,
    time,
    day,
    Timetable,
  });
  data.save();
  res.send(data);
});

app.get("/getTT", async (req, res) => {
  let currentDay = req.query.day;
  let Class = req.query.Class;
  let year = req.query.year;
  // const check = Timetable.teacher;
  try {
    const data = await TT.findOne({
      day: currentDay,
      Class: Class,
      year: year,
    });
    // data.map((val) => {
    //   val.Timetable.map((val) => {
    //     if (val.teacher == teacher) {
    //       console.log(val.teacher);
    //     }
    //   });
    // });
    res.status(200).send(data);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

app.get("/getTT/teacher", async (req, res) => {
  try {
    let day = req.query.day;
    const data = await TT.find({ day: day });
    res.status(200).json(data);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

app.get("/getstudents", async (req, res) => {
  try {
    const data = await students.find({ class: "bscit" });
    res.send({ status: "ok", data });
  } catch (err) {
    return res.status(500).send(e.message);
  }
});

app.post("/postAttendence", (req, res) => {
  const { clas, Div, Year, Time, Teacher, Subject, StudentData } = req.body;

  const data = new Attendence({
    clas,
    Div,
    Year,
    Time,
    Teacher,
    Subject,
    StudentData,
  });
  data.save();
  res.send(data);
});

app.post("/signin/teacher", async (req, res) => {
  try {
    let token;
    const { UID, email, password } = req.body;
    if (!UID || !email || !password) {
      res.status(400).send("pls fill the data");
    }
    const userdata = await Teachers.findOne({ UID: UID });
    if (userdata) {
      const verifypass = await bcrypt.compare(password, userdata.password);
      if (verifypass) {
        // token = await userdata.generateAuthToken();
        // console.log(token);
        res.status(200).json(userdata);
      } else {
        res.status(400).json("invalid credentials");
      }
    } else {
      console.log("data not found");
      res.status(400).json("data not found");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.post("/signin/student", async (req, res) => {
  try {
    let token;
    const { Id_no, email, password } = req.body;
    if (!email || !Id_no || !password) {
      res.status(400).send("fill all the fields");
    }
    const data = await students.findOne({ Id_no: Id_no });
    if (data) {
      const verifypass = await bcrypt.compare(password, data.password);
      if (verifypass) {
        // token = await data.generateAuthToken();
        // console.log(token);
        res.status(200).json(data);
      } else {
        res.status(400).json({ message: "invalid credentials" });
      }
    } else {
      console.log("data not found");
      res.status(400).send("data not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`the server is running at port no ${PORT}`);
});
