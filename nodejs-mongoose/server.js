const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config();
const cors = require('cors')

var port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false, }),);
app.use(cors())

mongoose.connect(process.env.PATH_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {res.send("Welcome to the API Back!")})


const workRoutes = require('./routes/work.route')
app.use(process.env.PATH_API_WORK, workRoutes)

app.listen(port, () => console.log(`Server running in port ${port}`)); 