const ReviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
  });
  
  module.exports = mongoose.model('Review', ReviewSchema);
  