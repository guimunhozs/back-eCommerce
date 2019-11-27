const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  discount: {
    type: Number,
    require: false
  },
  image: {
    type: [String],
    require: false
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;