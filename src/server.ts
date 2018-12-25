import { config as dotEnvConfig } from 'dotenv';
import express from 'express';
import { middleware } from './middleware';
import { applyMiddleware, applyRoutes } from './utils';
import { routes } from './services';

process.on('uncaughtException', e => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.log(e);
  process.exit(1);
});

dotEnvConfig();

const app: express.Express = express();
applyMiddleware(middleware, app);
applyRoutes(routes, app);

const { PORT = '3000' }: NodeJS.ProcessEnv = process.env;

app.listen(Number(PORT), () => {
  console.log(`Server is running http://localhost:${PORT}...`);
});
