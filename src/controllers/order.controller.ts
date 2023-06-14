import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function listOrders(req: Request, res: Response) {
  const allOrders = await orderService.getAllOrders();

  return res.status(200).json(allOrders.data);
}

const orderController = {
  listOrders,
};

export default orderController;