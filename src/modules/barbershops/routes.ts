import { Router } from "express";
import { createBarbershopController } from "./controllers/create-barbershop.controller";
import { getAllBarbershopController } from "./controllers/get-all-barbershop.controller";
import { findBarbershopByOwnerController } from "./controllers/find-barbershop-by-owner.controller";
import { findBarbershopByIdController } from "./controllers/find-barbershop-by-id.controller";
import { deleteBarbershopController } from "./controllers/delete-barbershop.controller";

const router = Router();

router.post("/barbershop", createBarbershopController);
router.get("/barbershop", getAllBarbershopController);
router.get("/barbershop/owner/:id", findBarbershopByOwnerController);
router.get("/barbershop/:id", findBarbershopByIdController);
router.delete("/barbershop/:id", deleteBarbershopController);

export default router;
