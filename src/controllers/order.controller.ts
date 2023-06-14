import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHttp';
import orderService from '../services/order.service';

async function listOrders(req: Request, res: Response) {
  const allOrders = await orderService.getAllOrders();

  if (allOrders.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(allOrders.status)).json(allOrders.data);
  }

  return res.status(200).json(allOrders.data);
}

const orderController = {
  listOrders,
};

export default orderController;