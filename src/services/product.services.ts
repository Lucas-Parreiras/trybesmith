import ProductModel, { ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ResponseProduct } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function addNewProduct(product: ProductInputtableTypes): Promise<ServiceResponse<ResponseProduct>> {
    let responseService: ServiceResponse<ResponseProduct>;
    
    const newProduct = await ProductModel.create(product);

    const { id, name, price } = newProduct.dataValues;

    responseService = { status: 'SUCCESSFUL', data: { id, name, price } };

    return responseService;
}

async function listAllProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
    let responseService: ServiceResponse<ProductSequelizeModel[]>;

    const productList = await ProductModel.findAll();

    responseService = { status: 'SUCCESSFUL', data: productList };

    return responseService;
}

const productService = {
    addNewProduct,
    listAllProducts,
};

export default productService;