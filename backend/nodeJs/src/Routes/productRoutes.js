const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productsController');
const auth = require('../Middleware/auth');
const admin = require('../Middleware/admin');

router.post('/products', auth, admin, productController.createProduct);
router.get('/products/:id', productController.getProduct);

module.exports = router;
