const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    carts: [{ type: Schema.Types.ObjectId, ref: 'Cart' }],
    wishlists: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }]
  });
  
  module.exports = mongoose.model('Product', ProductSchema);
  