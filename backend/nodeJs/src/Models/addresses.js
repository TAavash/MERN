const AddressSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    shippingAddress: { type: String, required: true },
    billingAddress: { type: String }
  });
  
  module.exports = mongoose.model('Address', AddressSchema);
  