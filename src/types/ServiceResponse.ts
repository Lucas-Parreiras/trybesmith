type ServResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'UNPROCESSABLE_ENTITY' | 'NOT_FOUND';

export type ServiceResponseError = {
  status: ServResponseErrorType,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
