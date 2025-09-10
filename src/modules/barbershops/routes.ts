import { Router } from "express";
import { createBarbershopController } from "./controllers/create-barbershop.controller";
import { getAllBarbershopController } from "./controllers/get-all-barbershop.controller";

const router = Router();

router.post("/barbershop", createBarbershopController);
router.get("/barbershop", getAllBarbershopController);

export default router;
