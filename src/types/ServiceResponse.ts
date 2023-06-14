type ServiceResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'UNPROCESSABLE_ENTITY';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
