import express from 'express';
import path from 'path';
import { corsMiddleware } from './config/cors';
import router from './routes/router';
import session from 'express-session';

const app = express();

app.set('trust proxy', 1);

app.use(corsMiddleware);

app.use(
  session({
    name: 'session-id',
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // DEV
      httpOnly: true,
      sameSite: 'lax', // 🔥 ESSENCIAL p/ mobile
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);
app.use(express.json());
app.use(router);

export default app;
