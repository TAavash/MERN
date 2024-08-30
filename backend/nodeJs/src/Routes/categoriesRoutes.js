const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoriesController');
const auth = require('../Middleware/auth');
const admin = require('../Middleware/admin');

router.post('/categories', auth, admin, categoryController.createCategory);
router.get('/categories/:id', categoryController.getCategory);

module.exports = router;
