import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';
import { ServResponse } from '../types/ServiceResponse';
import { UserBodyLogin } from '../types/User';
import { Token } from '../types/Jwt';

async function userLoginServ(login: UserBodyLogin): Promise<ServResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: 'BAD_REQUEST', data: { message: '"username" and "password" are required' } };
  }

  const foundUser = await UserModel.findOne({ where: { username: login.username } });

  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = foundUser.dataValues;

  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

const loginService = {
  userLoginServ,
};

export default loginService;