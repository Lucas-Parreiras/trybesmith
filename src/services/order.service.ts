/* eslint-disable max-lines-per-function */
import ProductModel from '../database/models/product.model';
import OrderModel, { OrderInListSequelizeModel } from '../database/models/order.model';
import { ServResponse } from '../types/ServiceResponse';
import { OrderWithDirectIds } from '../types/Order';

async function getAllOrders(): Promise<ServResponse<OrderWithDirectIds[]>> {
  const allOrders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  }) as OrderInListSequelizeModel[];
  const allOrdersResult = allOrders.map((order) => {
    const { id, userId, productIds } = order.dataValues;
    const directIds = productIds.map((prodId) => prodId.id);
    return { id, userId, productIds: directIds };
  });
  const serviceResponse: ServResponse<OrderWithDirectIds[]> = {
    status: 'SUCCESSFUL',
    data: allOrdersResult,
  };
  return serviceResponse;
}

const orderService = {
  getAllOrders,
};

export default orderService;