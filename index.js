var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json()); // Use this middleware to parse JSON bodies

let port =  3000;
require("dotenv").config();
let arr = [{
  title: "world",
  ID: Date.now()
}, {
  title: "world2",
  ID: Date.now()
}, {
  title: "world3",
  ID: Date.now()
}, {
  title: "world4",
  ID: Date.now()
}, {
  title: "world5",
  ID: Date.now()
}];

app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/login", (req, res) => {
  res.send(`User Login<h1>${process.env.USERNAMESFORREPO}</h1>`);
});

app.get("/home", (req, res) => {
  res.send("Men  home ");
});

// POST route to add a new item
app.post("/add", (req, res) => {
  const newItem = {
    title: req.body.title,
    ID: Date.now() // Generate a new ID for the item
  };
  arr.push(newItem);
  res.status(201).send(newItem); // Send back the newly added item
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
