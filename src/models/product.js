import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true
  },
  product_name: {
    type: String,
    required: true
  },
  price_product: {
    type: Number,
    required: true
  },
  thumbnail_product: {
    type: String,
    required: true
  },
  link_product: {
    type: String,
    required: true
  },
});
const Product = mongoose.model("Product", productSchema);

export default Product;