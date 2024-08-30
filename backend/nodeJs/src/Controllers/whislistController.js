const Wishlist = require('../models/Wishlist');

exports.createWishlist = async (req, res) => {
  const { user, products } = req.body;
  const newWishlist = new Wishlist({ user, products });

  try {
    const savedWishlist = await newWishlist.save();
    res.status(201).json(savedWishlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(req.params.id).populate('user products');
    if (!wishlist) return res.status(404).json({ error: 'Wishlist not found' });
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
