import { Router } from "express";
import userRoutes from "../modules/users/routes";
import barbershopRoutes from "../modules/barbershops/routes";

const router = Router();

router.use("/api", userRoutes);
router.use("/api", barbershopRoutes);

export default router;
