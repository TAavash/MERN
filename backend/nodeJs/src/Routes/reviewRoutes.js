const express = require('express');
const router = express.Router();
const reviewController = require('../Controllers/reviewsController');
const auth = require('../Middleware/auth');

router.post('/reviews', auth, reviewController.createReview);
router.get('/reviews/:id', reviewController.getReview);

module.exports = router;
