const express = require("express");
const app = express();
require("dotenv").config();
let arr = [{
  title: "world",
  ID: Date.now()
},
{
  title: "world2",
  ID: Date.now()
},
{
  title: "world3",
  ID: Date.now()
}, {
  title: "world4",
  ID: Date.now()
}, {
  title: "world5",
  ID: Date.now()
}]
app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/login", (req, res) => {
  res.send(`User Login<h1>${process.env.USERNAMESFORREPO}</h1>`);
});
app.get("/home", (req, res) => {
  res.send("Men  home ");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
