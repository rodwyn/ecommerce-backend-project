import express from 'express';
import productController from './product.controller';

export const productRouter = express.Router();

productRouter.route('/')
  .get(productController.findProduct)
  .post(productController.createProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

productRouter.route('/all')
  .get(productController.findProducts);
