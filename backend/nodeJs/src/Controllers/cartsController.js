const Cart = require('../models/Cart');

exports.createCart = async (req, res) => {
  const { user, products } = req.body;
  const newCart = new Cart({ user, products });

  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate('user products');
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
