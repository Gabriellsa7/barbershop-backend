import { Router } from "express";
import userRoutes from "../modules/users/routes";

const router = Router();

router.use("/api", userRoutes);

export default router;
