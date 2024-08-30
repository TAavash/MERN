const express = require('express');
const router = express.Router();
const addressController = require('../Controllers/addressesController');
const auth = require('../Middleware/auth');

router.post('/addresses', auth, addressController.createAddress);
router.get('/addresses/:id', auth, addressController.getAddress);

module.exports = router;
