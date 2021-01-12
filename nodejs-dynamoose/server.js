const express = require('express');
const app = express();
require("dotenv").config();

var port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false, }),);

app.get('/', (req, res) => {res.send("Welcome to the API Back!")})

const userRoute = require('./routes/user.route.js');
app.use(process.env.PATH_USER, userRoute);

app.listen(port, () => console.log(`Server running in Port ${port}`));