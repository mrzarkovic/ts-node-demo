import { Request, Response } from 'express';

export const searchRoutes = [
  {
    method: 'get',
    path: '/',
    handler: async (req: Request, res: Response) => {
      res.send('Hello world!');
    }
  }
];
