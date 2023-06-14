import { Request, Response } from 'express';
import productService from '../services/product.services';

async function addProduct(req: Request, res: Response) {
  const serviceResponse = await productService.addNewProduct(req.body);

  return res.status(201).json(serviceResponse.data);
}

async function listProducts(req: Request, res: Response) {
  const serviceResponse = await productService.listAllProducts();

  return res.status(200).json(serviceResponse.data);
}

const productController = {
  addProduct,
  listProducts,
};

export default productController;