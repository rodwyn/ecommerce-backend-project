const mongoose = require('mongoose');
const productSchema = require('../model/product');

productSchema.statics = {
  create: (data, cb) => {
    const product = new this(data);

    product.save(cb);
  },
  get: (query, cb) => {
    this.find(query, cb);
  },
  getByName: (query, cb) => {
    this.find(query, cb);
  },
  update: (query, updateData, cb) => {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },
  delete: (query, cb) => {
    this.findOneAndDelete(query, cb);
  }
};

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;
