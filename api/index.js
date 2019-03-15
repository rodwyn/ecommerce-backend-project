import express from 'express';
import { productRouter } from './resources/product/product.router';

export const restRouter = express.Router();

restRouter.use('/product', productRouter);
