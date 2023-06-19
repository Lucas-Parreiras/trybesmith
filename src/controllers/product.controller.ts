import { Request, Response } from 'express';
import productService from '../services/product.services';

async function addProduct(req: Request, res: Response) {
  const { name, price } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }

  const serviceResponse = await productService.addNewProduct(req.body);

  if (serviceResponse.status === 'UNPROCESSABLE_ENTITY') {
    return res.status(422).json(serviceResponse.data);
  }

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