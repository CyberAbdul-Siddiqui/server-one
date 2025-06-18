require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("Welcome to Instagram!");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is a login page</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>This is a YouTube Page</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
