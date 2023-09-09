const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../../config.env" });

const studentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: "student",
    },
    name: {
      type: String,
    },
    Roll_no: {
      type: Number,
    },
    Id_no: {
      type: Number,
    },
    profilePic: {
      type: String,
      default: "/images/profile_pic.png",
    },
    Class: {
      type: String,
    },
    div: {
      type: String,
    },
    year: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

studentSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err.message);
  }
};

const studentModal = mongoose.model("student", studentSchema);

module.exports = studentModal;
