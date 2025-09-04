import { Router } from "express";
import { createUserController } from "./controllers/create-user.controller";
import { listUsersController } from "./controllers/list-users.controller";

const router = Router();

router.post("/users", createUserController);
router.get("/users", listUsersController);

export default router;
