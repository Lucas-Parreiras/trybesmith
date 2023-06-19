import { Request, Response } from 'express';
import orderService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHttp';
import orderValid from '../utils/orderCreationValidation';

async function listOrders(req: Request, res: Response) {
  const allOrders = await orderService.getAllOrders();

  return res.status(200).json(allOrders.data);
}

async function createOrder(req: Request, res: Response) {
  const { userId, productIds } = req.body;
  const fieldsCheck = orderValid.existingFields(userId, productIds);
  if (fieldsCheck.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(fieldsCheck.status)).json(fieldsCheck.data);
  }

  const serviceResponse = await orderService.newOrder(req.body);

  const { status, data } = serviceResponse;
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  return res.status(201).json(data);
}

const orderController = {
  listOrders,
  createOrder,
};

export default orderController;