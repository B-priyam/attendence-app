const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../config.env" });

const teacherSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: "teacher",
    },
    UID: {
      type: Number,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    cloudinary: {
      type: String,
    },
    profilePic: {
      type: String,
      default: "/images/profile_pic.png",
    },
  },
  {
    timestamps: true,
  }
);

teacherSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

teacherSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err.message);
  }
};

const teachermodal = mongoose.model("teacher", teacherSchema);

module.exports = teachermodal;
