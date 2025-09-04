import express from "express";
import { corsMiddleware } from "./config/cors";
import router from "./routes/router";

const app = express();

app.use(corsMiddleware);

app.use(express.json());
app.use(router);

export default app;
