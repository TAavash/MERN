const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }]
});

module.exports = mongoose.model('User', UserSchema);
