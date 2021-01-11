const express = require('express')
const cors = require('cors')
const router = express.Router()
const userController = require('../controllers/user.controller');

router.use(cors())


router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.get('/username/:username', userController.findForUsername);
router.post('/login/', userController.login);

module.exports = router