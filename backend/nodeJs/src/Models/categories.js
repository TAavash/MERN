const CategorySchema = new Schema({
    name: { type: String, required: true },
    details: { type: String }
  });
  
  module.exports = mongoose.model('Category', CategorySchema);
  