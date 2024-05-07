
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express()
const TodoModel = require('./models/todo')
let port = 3000
//middlewares
app.use(cors())
app.use(express.json())
let MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)

app.post('/', (req, res) => {
    let task = req.body.task;
    TodoModel.create({
        task
    }).then((res) => res.json(res)).catch((err) => res.json(err))
})
app.get('/', (req, res) => {
    TodoModel.find().then(result => res.json(result)).catch(err => res.json(err))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})