import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors
} from './common';

export const middleware = [
  handleBodyRequestParsing,
  handleCompression,
  handleCors
];
