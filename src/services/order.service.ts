/* eslint-disable max-lines-per-function */
import { Op } from 'sequelize';
import ProductModel from '../database/models/product.model';
import OrderModel, { OrderInListSequelizeModel } from '../database/models/order.model';
import { ServResponse } from '../types/ServiceResponse';
import { NewOrderBody, OrderWithDirectIds } from '../types/Order';
import orderValid from '../utils/orderCreationValidation';

async function getAllOrders(): Promise<ServResponse<OrderWithDirectIds[]>> {
  const allOrders = await OrderModel.findAll({
    include: [{
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

async function newOrder(order: NewOrderBody): Promise<ServResponse<NewOrderBody>> {
  const { userId, productIds } = order;

  const userIdCheck = await orderValid.userIdValidation(userId);
  if (userIdCheck.status !== 'SUCCESSFUL') {
    return userIdCheck;
  }

  const productIdsCheck = orderValid.productIdsValidation(productIds);
  if (productIdsCheck.status !== 'SUCCESSFUL') {
    return productIdsCheck;
  }

  const newOrderCreated = await OrderModel.create({ userId });
  await ProductModel.update(
    { orderId: newOrderCreated.dataValues.id },
    { where: { id: { [Op.in]: productIds } } },
  );

  return { status: 'SUCCESSFUL', data: { userId, productIds } };
}

const orderService = {
  getAllOrders,
  newOrder,
};

export default orderService;