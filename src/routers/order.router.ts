import { Router } from 'express';

import orderController from '../controllers/order.controller';
import authMiddleware from '../middlewares/auth.middleware';

const orderRouters = Router();

orderRouters.get('/orders', orderController.listOrders);
orderRouters.post('/orders', authMiddleware, orderController.createOrder);

export default orderRouters;