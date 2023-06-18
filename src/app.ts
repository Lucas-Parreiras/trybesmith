import express from 'express';
import productRouter from './routers/product.router';
import orderRouters from './routers/order.router';
import loginRouters from './routers/login.router';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(orderRouters);
app.use(loginRouters);

export default app;
