const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  description: {
    type: String,
    unique: false,
    required: true
  },
  imgSrc: {
    type: String,
    unique: false,
    required: true
  },
  price: {
    type: Number,
    unique: false,
    required: true
  },
  rate: {
    type: Number,
    unique: false,
    required: true
  },
  stock: {
    type: Number,
    unique: false,
    required: true
  }
});

module.exports = productSchema;
