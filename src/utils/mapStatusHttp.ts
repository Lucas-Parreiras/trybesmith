export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    UNPROCESSABLE_ENTITY: 422,
  };

  return statusHTTPMap[status] ?? 500;
}