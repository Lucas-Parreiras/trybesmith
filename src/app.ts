import express from 'express';
import productRouter from './routers/product.router';
import orderRouters from './routers/order.router';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(orderRouters)

export default app;
