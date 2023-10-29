const express = require("express");
require("./conn.js");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const students = require("../models/studentmodal.js");
const Teachers = require("../models/teachermodal.js");
const TT = require("../models/Timetablemodal.js");
const Attendence = require("../models/Attendencemodal.js");
const Notice = require("../models/noticemodel.js");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cld = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const { start } = require("repl");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

cld.config({
  cloud_name: "priyam3801h",
  api_key: "171723684483845",
  api_secret: "_f_ogbGIp6mJoRbVybr3JTdpknE",
});

app.post("/students", async (req, res) => {
  const {
    name,
    Roll_no,
    Id_no,
    clas,
    div,
    year,
    email,
    password,
    profilePic,
    confirmpassword,
    cloudinary,
  } = req.body;
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
    cloudinary,
  });
  if (
    !name ||
    !email ||
    !password ||
    !Id_no ||
    !Roll_no ||
    !clas ||
    !div ||
    !year
  ) {
    return res.status(400).json({ message: "pls fill all details" });
  }
  const userExists = await students.findOne({ Id_no: Id_no });
  if (userExists) {
    return res.status(400).json({ message: "Student Already Registered" });
  }
  if (password !== confirmpassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  data
    .save()
    .then(() => {
      return res.status(201).json({ data: "Student added successfully" });
    })
    .catch((e) => {
      return res.status(400).json({ message: e.message });
    });
});

app.post("/teachers", async (req, res) => {
  try {
    const {
      UID,
      name,
      email,
      password,
      profilePic,
      confirmpassword,
      cloudinary,
    } = req.body;

    const data = new Teachers({
      UID,
      name,
      email,
      password,
      profilePic,
      cloudinary,
    });
    if (!name || !email || !password || !UID) {
      return res.status(400).json({ message: "pls fill all details" });
    }
    const userExists = await Teachers.findOne({ UID: UID });
    if (userExists) {
      return res.status(400).json({ message: "Teacher Already Registered" });
    }
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "pls fill all details" });
    }
    await data.save();
    res.status(201).json({ message: req.body });
  } catch (e) {
    res.status(400).json({ message: e.message });
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
  let div = req.query.div;
  try {
    const data = await TT.findOne({
      day: currentDay,
      Class: Class,
      year: year,
      div: div,
    });
    res.status(200).json(data);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

app.get("/getTT/teacher", async (req, res) => {
  try {
    let day = req.query.day;
    const date = new Date();
    let today =
      date.getDate() + "" + (date.getMonth() + 1) + "" + date.getFullYear();
    const data = await TT.find({ day: day });
    data.map((val) => {
      val.Timetable.map(async (val) => {
        if (Number(val.updatedDay) < Number(today)) {
          const update = await TT.updateOne(
            { day: day, "Timetable._id": val._id },
            {
              $set: {
                "Timetable.$.status": "nottaken",
              },
            }
          );
        }
      });
    });

    data.map((val) => {
      val.TempTT.map(async (val) => {
        if (Number(val.date) < Number(today)) {
          const update = await TT.updateOne(
            { day: day, "Timetable.time": val.time },
            {
              $set: {
                [`Timetable.$.teacher`]: val.teacher,
                [`Timetable.$.subject`]: val.subject,
                [`Timetable.$.room`]: val.room,
              },
            }
          );
        }
      });
    });
    data.map((val) => {
      val.TempTT.map(async (val) => {
        if (Number(val.date) < Number(today)) {
          const update = await TT.updateOne(
            { day: day, "TempTT.time": val.time },
            {
              $pull: {
                TempTT: { time: val.time },
              },
            }
          );
        }
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
    const data = await students
      .find({ Class: clas, year, div })
      .sort({ Roll_no: 1 });
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

  const day = req.query.day;
  const find = await TT.findOne({ day, Class: clas, div, year });
  // res.send(find);
  if (find) {
    const update = await TT.updateOne(
      { day, Class: clas, div, year, "Timetable._id": id },
      {
        $set: {
          "Timetable.$.status": "taken",
          "Timetable.$.updatedDay": updatedDay,
          "Timetable.$.status": "taken",
        },
      }
    );
    if (update) {
      await data.save();
      res.status(201).json(data);
    } else {
      res.status(400).json({ message: "error" });
    }
  } else {
    res.status(400).json({ message: "data not found" });
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
      if (verifypass && userdata.email === email) {
        token = await userdata.generateAuthToken();
        if (jwt.verify(token, process.env.SECRET_KEY)) {
          return res.status(200).json(userdata);
        } else {
          res.status(400).send("invalid Token");
        }
      } else {
        return res.status(400).json({ message: "invalid credentials" });
      }
    } else {
      return res.status(400).json({ message: "data not found" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
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
      if (verifypass && data.email === email) {
        token = await data.generateAuthToken();
        if (jwt.verify(token, process.env.SECRET_KEY)) {
          return res.status(200).json(data);
        } else {
          res.status(400).send("invalid Token");
        }
      } else {
        return res.status(400).json({ message: "invalid credentials" });
      }
    } else {
      return res.status(400).json({ message: "data not found" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.post("/deletestudent", async (req, res) => {
  try {
    const Id_no = req.query.Id_no;
    const deletedata = await students.deleteOne({ Id_no: Id_no });
    if (deletedata) {
      return res.status(200).json({ message: "Student Deleted Successfully" });
    } else {
      return res.status(400).json({ message: "Student does not exists" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.post("/updatestudent", async (req, res) => {
  try {
    const Id_no = req.query.Id_no;
    const update = await students.updateOne(
      { Id_no: Id_no },
      {
        $set: req.body,
      }
    );
    if (update.modifiedCount > 0) {
      return res
        .status(200)
        .json({ message: "Student Data Updated Successfully" });
    } else {
      return res.json({ message: "Student Does not exists" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

app.post("/editProfile", async (req, res) => {
  try {
    let data;
    const { Id_no, type } = req.query;
    if (type === "student") {
      data = await students.updateOne(
        { Id_no: Id_no },
        {
          $set: req.body,
        }
      );
    } else if (type === "teacher") {
      data = await Teachers.updateOne(
        { UID: Id_no },
        {
          $set: req.body,
        }
      );
    } else {
      return res.status(400).send({ message: "data not found" });
    }
    if (data) {
      return res
        .status(200)
        .json({ message: "updated successfully", data: req.body });
    } else {
      return res
        .status(400)
        .json({ message: "cannot update data please try again" });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/updateProfilePic", async (req, res) => {
  try {
    let data;
    const { Id_no, type } = req.query;
    if (type === "student") {
      const find = await students.findOne({ Id_no });
      if (find) {
        if (find.cloudinary) {
          const delet = await cld.uploader.destroy(find.cloudinary);
        }
        {
          data = await students.updateOne(
            { Id_no: Id_no },
            {
              $set: req.body,
            }
          );
          return res.status(200).json({
            message: " Kindly Relogin to see the updates",
            data: req.body,
          });
        }
      } else {
        return res
          .status(400)
          .json({ message: "some error occured kindly try again" });
      }
    } else if (type === "teacher") {
      const find = await Teachers.findOne({ UID: Id_no });
      if (find) {
        const delet = await cld.uploader.destroy(find.cloudinary);
        {
          data = await Teachers.updateOne(
            { UID: Id_no },
            {
              $set: req.body,
            }
          );
          return res.status(200).json({
            message: " Kindly Relogin to see the updates",
            data: req.body,
          });
        }
      }
    } else {
      return res.status(400).send({ message: "data not found" });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/postnotice", async (req, res) => {
  try {
    let today = new Date();
    let date = `${today.getDate()}-${
      today.getMonth() + 1
    }-${today.getFullYear()}`;
    const { notice, time } = req.body;
    console.log(time);
    const data = new Notice({
      notice,
      date,
      Time: time,
    });
    if (!notice) {
      return res
        .status(400)
        .json({ message: "Kindly Enter Some Text In The TextBox" });
    }
    console.log(time);
    const save = await data.save();
    if (save) {
      return res.status(200).json({ message: "Notice Send Successfully 👍" });
    } else {
      return res
        .status(400)
        .json({ message: "Cannot Send Message Now Kindly Try Again" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
});

app.get("/getnotice", async (req, res) => {
  try {
    const data = await Notice.find({});
    if (data) {
      return res.status(200).json({
        data,
      });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.delete("/deleteNotice", async (req, res) => {
  try {
    const id = req.body.id.id;
    const data = await Notice.findByIdAndDelete({ _id: id });
    if (data) {
      res.status(200).json({ message: "message deleted successfully" });
    } else {
      res.status(400).json({ message: "error in deleting message" });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/updateTT", async (req, res) => {
  var time = req.body.currentdata.time;
  var field = req.body.field;
  var fieldData = req.body.fieldData;
  const currentdata = req.body.currentdata;
  const find = await TT.find({ _id: req.body.data._id });
  find[0].Timetable.map(async (val) => {
    if (val.time == time) {
      await TT.updateOne(
        { _id: req.body.data._id },
        {
          $push: {
            TempTT: {
              time: currentdata.time,
              teacher: currentdata.teacher,
              subject: currentdata.subject,
              room: currentdata.room,
              date: req.body.date,
            },
          },
        }
      );
      await TT.updateOne(
        { _id: req.body.data._id, "Timetable._id": currentdata._id },
        {
          $set: {
            [`Timetable.$.${field}`]: fieldData,
          },
        }
      );
      res.status(200).send({ message: "updated successfully" });
    }
  });
});

let a = new Date();
// console.log(a.toDateString());

app.post("/attendence", async (req, res) => {
  const { name } = req.body;
  let end = new Date(req.body.end);
  let start = new Date(req.body.start);
  end.setDate(Number(req.body.end.split("-")[2]) + 1);

  const d = await Attendence.find({
    Date: {
      $gte: start.getTime(),
      $lte: end.getTime(),
    },
  });
  let total = 0;
  let present = 0;

  let subjects = [];
  let subjectpresent = [];

  d.map(async (val1) => {
    const timestamp = val1.Date;
    const date = new Date(timestamp * 1);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;

    val1.StudentData.map((val) => {
      if (val.name === name) {
        total++;
      }
      if (
        val.name === name &&
        (val.attendenceStatus === "Present" || val.attendenceStatus === "Late")
      ) {
        present++;
      }
      if (val.name === name && !(val1.Subject in subjects)) {
        subjects.push(val1.Subject);
        if (
          val.attendenceStatus === "Present" ||
          val.attendenceStatus === "Late"
        ) {
          subjectpresent.push(val1.Subject);
        }
      }
    });
  });

  scounts = {};
  spcounts = {};
  subjects.forEach((x) => {
    scounts[x] = (scounts[x] || 0) + 1;
  });
  subjectpresent.forEach((x) => {
    spcounts[x] = (spcounts[x] || 0) + 1;
  });

  // console.log(d);

  const s = Math.round((present / total) * 100);
  let particular = {};
  subjects.forEach((x) => {
    particular[`${x}`] = Math.round((spcounts[x] / scounts[x]) * 100);
  });
  res.json({ message: s, p: particular });
});

app.post("/attendence/teacher", async (req, res) => {
  const { clas, div, year } = req.body.user;
  const { st, lt } = req.body;

  const start = new Date(st);

  const end = new Date(lt);
  if (!clas || !div || !year) {
    return res.status(400).json({ message: "Please provide all the details" });
  }
  const get = await Attendence.find({
    Class: clas,
    Div: div,
    Year: year,
    Date: {
      $gte: start.getTime(),
      $lte: end.getTime(),
    },
  });

  if (get.length <= 0) {
    console.log("not");
    return res.status(400).json({ message: "data not found" });
  } else {
    try {
      let subjects = [];
      get.map((val) => {
        if (val.Subject in subjects) {
        } else {
          subjects.push(val.Subject);
        }
      });
      const subject = subjects.filter((v, i, self) => {
        return i == self.indexOf(v);
      });

      let temp;
      let arr = [];

      subject.map((val) => {
        temp = [];
        get.map((val1) => {
          if (val1.Subject === val) {
            val1.StudentData.map((val) => {
              temp.push({
                Date: new Date(val1.localDate).toLocaleDateString(),
                subject: val1.Subject,
                name: val.name,
                attendence: val.attendenceStatus,
              });
            });
          }
        });
        arr.push(temp);
      });
      let farr = [];
      let pfarr = [];
      let tot;
      let total = [];
      let names = [];
      let frequency;
      let pfrequency;
      arr.map((val) => {
        frequency = {};
        pfrequency = {};
        tot = [];
        val.map((e) => {
          if (e.name in frequency) {
            frequency[e.name]++;
          } else {
            frequency[e.name] = 1;
          }
          if (e.attendence === "Present") {
            if (e.name in pfrequency) {
              pfrequency[e.name]++;
            } else {
              pfrequency[e.name] = 1;
            }
          }
        });
        names.push(Object.keys(frequency));
        for (let i = 0; i < arr.length - 1; i++) {
          tot.push({
            name: Object.keys(frequency)[i],
            total: Math.round(
              (Object.values(pfrequency)[i] / Object.values(frequency)[i]) * 100
            ),
          });
        }
        total.push(tot);
        farr.push(frequency);
        pfarr.push(pfrequency);
      });
      let allover = {};
      total.map((val) => {
        val.map((val) => {
          if (val.name in allover) {
            allover[val.name] += val.total ? val.total : 0;
          } else {
            allover[val.name] = val.total ? val.total : 0;
          }
        });
      });

      allover = Object.entries(allover);
      res.status(200).json({
        subjects: subject,
        names: names[0],
        attendence: total,
        alloverdata: allover,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
});

// ---------------------- DEPLOYMENT --------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"));
  });
} else {
  app.get("", (req, res) => {
    console.log("error");
    res.send("hello world");
  });
}

//"build":"npm install && install --prefix frontend && npm run build --prefix frontend"

// ---------------------- DEPLOYMENT --------------

app.listen(PORT, () => {
  console.log(`the server is running at port no ${PORT}`);
});
