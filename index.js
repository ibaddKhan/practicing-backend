var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
let port =3000
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
