const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { user, products, paymentInfo, deliveryStatus } = req.body;
  const newOrder = new Order({ user, products, paymentInfo, deliveryStatus });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user products');
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
