import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

async function userLogin(req: Request, res: Response) {
  const serviceResponse = await loginService.userLoginServ(req.body);

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
}

const loginController = {
  userLogin,
};

export default loginController;