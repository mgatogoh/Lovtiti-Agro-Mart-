const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: String,
  description: String,
  image: String // You can later store image URLs or use IPFS
});

module.exports = mongoose.model('Product', productSchema);
