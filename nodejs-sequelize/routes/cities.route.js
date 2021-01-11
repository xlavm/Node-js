const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/cities.controller');


router.get('/', citiesController.findAll);
router.post('/', citiesController.create);
router.get('/:id', citiesController.findOne);
router.put('/:id', citiesController.update);
router.delete('/:id', citiesController.delete);

module.exports = router