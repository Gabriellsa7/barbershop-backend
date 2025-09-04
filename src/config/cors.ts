import cors, { CorsOptions } from "cors";

const allowedOrigins = [
  "http://localhost:19006", // Expo / React Native dev
  "http://localhost:3000", // front web dev
  "https://meuapp.com", // build web
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
