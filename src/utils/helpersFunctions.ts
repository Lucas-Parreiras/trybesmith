import { ResProduct } from '../types/Product';
import { ServResponse } from '../types/ServiceResponse';

function validateFields(check: string, field: string): string | null {
  if (typeof field !== 'string') { return `"${check}" must be a string`; }
  
  if (field.length <= 2) { return `"${check}" length must be at least 3 characters long`; }
  
  return null;
}

function errorHandle(name: string, price: string): null | ServResponse<ResProduct> {
  let responseService: ServResponse<ResProduct>;
    
  const errorName = validateFields('name', name);
  const errorPrice = validateFields('price', price);
    
  if (errorName) {
    responseService = {
      status: 'UNPROCESSABLE_ENTITY',
      data: { message: errorName },
    };
    
    return responseService;
  }
    
  if (errorPrice) {
    responseService = {
      status: 'UNPROCESSABLE_ENTITY',
      data: { message: errorPrice },
    };
    
    return responseService;
  }

  return null;
}

export default errorHandle;