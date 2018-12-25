import { HTTPClientError } from './HTTPClientError';

export class HTTP404Error extends HTTPClientError {
  public readonly statusCode = 404;

  constructor(message: string | object = 'Not found') {
    super(message);
  }
}
