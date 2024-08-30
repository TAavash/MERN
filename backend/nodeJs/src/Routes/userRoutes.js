const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const auth = require('../Middleware/auth');
const admin = require('../Middleware/admin');

router.post('/users', userController.createUser);
router.get('/users/:id', auth, userController.getUser);

module.exports = router;
