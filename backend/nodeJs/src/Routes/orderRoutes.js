const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/ordersController');
const auth = require('../Middleware/auth');

router.post('/orders', auth, orderController.createOrder);
router.get('/orders/:id', auth, orderController.getOrder);

module.exports = router;
