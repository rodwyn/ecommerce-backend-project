import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  description: {
    type: String
  },
  imgSrc: {
    type: String
  },
  price: {
    type: Number
  },
  rate: {
    type: Number
  },
  stock: {
    type: Number
  }
});

export default mongoose.model('Product', productSchema);
