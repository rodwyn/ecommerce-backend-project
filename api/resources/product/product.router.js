import express from 'express';
import productController from './product.controller';

export const productRouter = express.Router();

productRouter.route('/')
  .get(productController.findProducts)
  .post(productController.createProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);
