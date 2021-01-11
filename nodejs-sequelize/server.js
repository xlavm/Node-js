const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => { 
  res.send('Welcome to the API Back!'); 
}); 


const userRoutes = require('./routes/user.route')
app.use(process.env.PATH_USER, userRoutes)
const citiesRoutes = require('./routes/cities.route')
app.use(process.env.PATH_CITIES, citiesRoutes)


app.listen(port, () => console.log(`Server running in port ${port}`)); 