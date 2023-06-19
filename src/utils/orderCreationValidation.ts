import UserModel from '../database/models/user.model';
import { ServResponse } from '../types/ServiceResponse';

async function userIdValidation(userId: number): Promise<ServResponse<null>> {
  if (typeof userId !== 'number') {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: '"userId" must be a number' } };
  }

  const foundUser = await UserModel.findByPk(userId);

  if (!foundUser) {
    return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };
  }

  return { status: 'SUCCESSFUL', data: null };
}

function productIdsValidation(productIds: number[]): ServResponse<null> {
  if (!Array.isArray(productIds)) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: '"productIds" must be an array' } };
  }

  if (productIds.length === 0) {
    return {
      status: 'UNPROCESSABLE_ENTITY',
      data: { message: '"productIds" must include only numbers' },
    };
  }

  return { status: 'SUCCESSFUL', data: null };
}

function existingFields(userId: number, productIds: number[]): ServResponse<null> {
  if (!userId) {
    return { status: 'BAD_REQUEST', data: { message: '"userId" is required' } };
  }

  if (!productIds) {
    return { status: 'BAD_REQUEST', data: { message: '"productIds" is required' } };
  }

  return { status: 'SUCCESSFUL', data: null };
}

const orderValid = {
  userIdValidation,
  productIdsValidation,
  existingFields,
};

export default orderValid;