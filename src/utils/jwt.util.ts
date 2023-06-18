import jwt from 'jsonwebtoken';
import { TokenPayLoad } from '../types/Jwt';

const secret = process.env.JWT_SECRET || 'secret';

function sign(payload: TokenPayLoad): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): TokenPayLoad {
  const data = jwt.verify(token, secret) as TokenPayLoad;
  return data;
}

export default {
  sign,
  verify,
};