const express = require("express");
const router = express.Router();
const wishlistController = require("../Controllers/whislistController");
const auth = require("../Middleware/auth");

router.post("/wishlists", auth, wishlistController.createWishlist);
router.get("/wishlists/:id", auth, wishlistController.getWishlist);

module.exports = router;
