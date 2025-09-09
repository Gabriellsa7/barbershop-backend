import { Router } from "express";
import { createBarbershopController } from "./controllers/create-barbershop.controller";

const router = Router();

router.post("/barbershop", createBarbershopController);

export default router;
