const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartsController');
const auth = require('../Middleware/auth');

router.post('/carts', auth, cartController.createCart);
router.get('/carts/:id', auth, cartController.getCart);

module.exports = router;
