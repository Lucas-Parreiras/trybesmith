import { Router } from 'express';

import orderController from '../controllers/order.controller';

const orderRouters = Router();

orderRouters.get('/orders', orderController.listOrders);

export default orderRouters;