import ProductModel,
{ ProductInputtableTypes } from '../database/models/product.model';
import { ResProduct, Product } from '../types/Product';
import { ServResponse } from '../types/ServiceResponse';

async function addNewProduct(product: ProductInputtableTypes): Promise<ServResponse<ResProduct>> {
  const newProduct = await ProductModel.create(product);

  const { id, name, price } = newProduct.dataValues;

  const responseService: ServResponse<ResProduct> = {
    status: 'SUCCESSFUL',
    data: { id, name, price },
  };

  return responseService;
}

async function listAllProducts(): Promise<ServResponse<Product[]>> {
  const productList = await ProductModel.findAll();

  const responseList = productList.map((p) => p.dataValues);

  const responseService: ServResponse<Product[]> = {
    status: 'SUCCESSFUL',
    data: responseList,
  };

  return responseService;
}

const productService = {
  addNewProduct,
  listAllProducts,
};

export default productService;