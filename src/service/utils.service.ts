import { AxiosResponse } from 'axios';

export function returnSanitizer(response: AxiosResponse) {
  const sanitized = {
    status: response.status,
    data: response.data
  }

  if (!response.status.toString().startsWith('2')) {
    sanitized.data = undefined;
  }

  return sanitized;
}