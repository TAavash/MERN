const Address = require('../models/Address');

exports.createAddress = async (req, res) => {
  const { user, shippingAddress, billingAddress } = req.body;
  const newAddress = new Address({ user, shippingAddress, billingAddress });

  try {
    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id).populate('user');
    if (!address) return res.status(404).json({ error: 'Address not found' });
    res.json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
