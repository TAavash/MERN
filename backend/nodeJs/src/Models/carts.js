const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  });
  
  module.exports = mongoose.model('Cart', CartSchema);
  