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
const mongoose = require("mongoose");
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
    Class: clas,
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
  const { clas, year, day, time, Timetable, div } = req.body;

  const data = new TT({
    Class: clas,
    year,
    time,
    day,
    Timetable,
    div,
  });
  data.save();
  res.send(data);
});

app.get("/getTT", async (req, res) => {
  let currentDay = req.query.day;
  let Class = req.query.Class;
  let year = req.query.year;
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

    data.map((val) => {
      val.Timetable.map(async (val) => {
        if (val.updatedDay < req.query.date) {
          const update = await TT.updateOne(
            { day: day, "Timetable._id": val._id },
            {
              $set: {
                "Timetable.$.status": "nottaken",
              },
            }
          );
          // val.status = "nottaken";
        }
        console.log(val);
      });
    });
    res.status(200).send(data);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

app.get("/getstudents", async (req, res) => {
  try {
    const clas = req.query.class;
    const year = req.query.year;
    const div = req.query.div;
    const data = await students.find({ clas, year, div });
    res.send({ status: "ok", data });
  } catch (err) {
    return res.status(500).send(e.message);
  }
});

app.post("/postAttendence", async (req, res) => {
  const {
    clas,
    Div,
    Year,
    Time,
    Teacher,
    Subject,
    StudentData,
    id,
    div,
    year,
    updatedDay,
  } = req.body;

  const data = new Attendence({
    Class: clas,
    Div,
    Year,
    Time,
    Teacher,
    Subject,
    StudentData,
  });
  console.log(updatedDay);
  const day = req.query.day;
  const find = await TT.findOne({ day, Class: clas, div, year });
  // res.send(find);
  if (find) {
    const update = await TT.updateOne(
      { day: "monday", Class: clas, Div, Year, "Timetable._id": id },
      {
        $set: {
          "Timetable.$.status": "taken",
          "Timetable.$.updatedDay": updatedDay,
        },
      }
    );
    if (update) {
      // data.save();
      // res.send(data);
      res.send("done");
    } else {
      res.send("error");
    }
  } else {
    res.send("data not found");
  }
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

app.patch("/getTT", async (req, res) => {
  try {
    const id = req.query.id;
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`the server is running at port no ${PORT}`);
});
