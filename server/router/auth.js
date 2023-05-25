const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/connection");

const User = require("../model/userSchema");

router.get("/", async (req, res) => {
  res.send("Hello world from router");
});

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Plz fill the required fields.." });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist)
//         return res.status(422).json({ error: "User already exist" });
//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registered successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Registration failed" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill the required fields.." });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) return res.status(422).json({ error: "User already exist" });

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    const userRegister = await user.save();

    if (userRegister)
      res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the details." });
    }
    const userLogin = await User.findOne({ email: email });

    console.log({ userLogin });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      console.log({ isMatch });
      const token = await userLogin.generateAuthToken();
      console.log({ token });

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res
          .status(400)
          .json({ error: "User Signin Unsuccessful", data: userLogin });
      } else {
        res
          .status(200)
          .json({ message: "User Signin successful", data: userLogin });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
