const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    paymentInfo: { type: String, required: true },
    deliveryStatus: { type: String, required: true }
  });
  
  module.exports = mongoose.model('Order', OrderSchema);
  