import HttpError from '../types/HttpError';

export default function mapStatusHTTP(status: HttpError): number {
  const statusHTTPMap: Record<HttpError, number> = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
  };

  return statusHTTPMap[status] ?? 500;
}