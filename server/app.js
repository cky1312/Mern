const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });
require("./db/connection");
app.use(express.json());
app.use(require("./router/auth")); // link router

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
  res.send("Hello World ! from contact");
});

app.get("/signup", (req, res) => {
  res.send("Hello World ! from signup");
});

app.get("/login", (req, res) => {
  res.send("Hello World ! from login");
});
console.log("hey");
app.listen(PORT, () => {
  console.log(`Server is runnibg at Port ${PORT}`);
});
