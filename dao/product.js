const mongoose = require('mongoose');
const productSchema = require('../model/product');

productSchema.statics = {
  create: function (data, cb) {
    const product = new this(data);

    product.save(cb);
  },
  get: function (query, cb) {
    this.find(query, cb);
  },
  getByName: function (query, cb) {
    this.find(query, cb);
  },
  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },
  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  }
};

const productModel = mongoose.model('product', productSchema);
module.exports = productModel;
