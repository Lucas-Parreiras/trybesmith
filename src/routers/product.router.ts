import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();

productRouter.get('/products', productController.listProducts);

productRouter.post('/products', productController.addProduct);

export default productRouter;