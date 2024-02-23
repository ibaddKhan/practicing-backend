var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json()); 

let port =  3000;
require("dotenv").config();
let arr = [];

app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/login", (req, res) => {
  res.send(`User Login<h1>${process.env.USERNAMESFORREPO}</h1>`);
});

app.get("/home", (req, res) => {
  res.send("Men  home ");
});

app.post("/add", (req, res) => {
  const newItem = {
    title: req.body.title,
    ID: Date.now() 
  };
  arr.unshift(newItem);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
