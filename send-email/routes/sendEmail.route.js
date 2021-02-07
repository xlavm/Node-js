const express = require('express')
const cors = require('cors')
const router = express.Router()
const sendEmailController = require('../controllers/sendEmail.controller');

router.use(cors())

router.post('/sendemail', sendEmailController.send);

module.exports = router