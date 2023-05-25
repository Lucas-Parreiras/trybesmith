import { Request, Response } from 'express';
import productService from '../services/product.services';
import mapStatusHTTP from '../utils/mapStatusHttp';

async function addProduct(req: Request, res: Response) {
    const serviceResponse = await productService.addNewProduct(req.body);

    if (serviceResponse.status !== 'SUCCESSFUL') {
        return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(201).json(serviceResponse.data);
}

async function listProducts(req: Request, res: Response) {
    const serviceResponse = await productService.listAllProducts();

    return res.status(200).json(serviceResponse.data);
}

const productController = {
    addProduct,
    listProducts
};

export default productController;