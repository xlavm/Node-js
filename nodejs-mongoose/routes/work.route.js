const express = require('express')
const cors = require('cors')
const router = express.Router()
const workController = require('../controllers/work.controller');

router.use(cors())

router.post('/', workController.create);
router.put('/:id', workController.update);
router.delete('/:id', workController.delete);
router.get('/', workController.findAll);
router.get('/:id', workController.findOne);

module.exports = router