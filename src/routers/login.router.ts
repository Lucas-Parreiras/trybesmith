import { Router } from 'express';

import loginController from '../controllers/login.controller';

const loginRouters = Router();

loginRouters.post('/login', loginController.userLogin);

export default loginRouters;