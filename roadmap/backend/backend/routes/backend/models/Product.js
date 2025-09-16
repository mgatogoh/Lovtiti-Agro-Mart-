const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['crops', 'livestock', 'aquaculture'],
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String // You can store image URLs or IPFS hashes here
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
