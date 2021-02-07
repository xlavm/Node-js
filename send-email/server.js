const express = require('express')
const cors = require('cors')
const app = express()
require("dotenv").config();

var port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false, }),);
app.use(cors())


app.get('/', (req, res) => {res.send("Welcome to the API Send Email!")})


const sendEmailRoutes = require('./routes/sendEmail.route')
app.use(process.env.PATH_API_SEND_EMAIL, sendEmailRoutes)

app.listen(port, () => console.log(`Server running in port ${port}`)); 