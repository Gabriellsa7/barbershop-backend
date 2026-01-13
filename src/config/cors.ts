import cors, { CorsOptions } from 'cors';

const allowedOrigins = [
  'http://10.1.73.233:8081', // Expo / React Native dev
  'exp://10.1.73.233:8081',
  'http://10.1.73.233:3000',
  'http://localhost:8081',
  'http://192.168.56.1:3000',
  'http://192.168.0.17:3000',
  'http://0.0.0.0:3000',
  'http://localhost:3000', // front web dev
  'https://meuapp.com', // build web
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(
        new Error('Origin not allowed by CORS'),
      );
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
