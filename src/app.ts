import express from 'express';
import path from 'path';
import { corsMiddleware } from './config/cors';
import router from './routes/router';

const app = express();

app.use(corsMiddleware);

app.use(
  '/uploads',
  express.static(
    path.join(__dirname, '..', 'uploads'),
  ),
);

app.use(express.json());
app.use(router);

export default app;
