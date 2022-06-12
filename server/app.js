const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });

const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("Error");
  });

app.get("/", (req, res) => {
  res.send("Hello World ! from home");
});

app.get("/about", (req, res) => {
  res.send("Hello World ! from about");
});

app.get("/contact", (req, res) => {
  res.send("Hello World ! from contact");
});

app.get("/signup", (req, res) => {
  res.send("Hello World ! from signup");
});

app.get("/login", (req, res) => {
  res.send("Hello World ! from login");
});
console.log("hey");
app.listen(3000, () => {
  console.log("Server is runnibg at Port 3000");
});
