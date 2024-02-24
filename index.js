const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;
require("dotenv").config();
const arr = [];

app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/login", (req, res) => {
  res.send(`User Login<h1>${process.env.USERNAMESFORREPO}</h1>`);
});

app.get("/home", (req, res) => {
  res.send("Men home");
});

app.post("/add", (req, res) => {
  const newItem = {
    title: req.body.title,
    ID: Date.now()
  };
  arr.unshift(newItem);
  res.status(201).send(newItem);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
