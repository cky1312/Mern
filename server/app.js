const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
dotenv.config({ path: "./.env" });
require("./db/connection");
app.use(express.json());
app.use(require("./router/auth")); // link router
// app.use(cors());
// const User = require("./model/userSchema");
const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("middleware called");
  next();
};

// middleware();
app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello World ! from home");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello World ! from about");
});

app.get("/contact", middleware, (req, res) => {
  // res.cookie("jwt", "token", {
  //   expires: new Date(Date.now() + 25892000000),
  //   httpOnly: true,
  // });
  res.send("Hello World ! from contact");
});

app.get("/signup", (req, res) => {
  res.send("Hello World ! from signup");
});

app.get("/login", (req, res) => {
  res.send("Hello World ! from login");
});

app.listen(PORT, () => {
  console.log(`Server is runnibg at Port ${PORT}`);
});
