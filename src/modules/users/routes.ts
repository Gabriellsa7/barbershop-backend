import { Router } from "express";
import { createUserController } from "./controllers/create-user.controller";
import { listUsersController } from "./controllers/list-users.controller";
import { deleteUserController } from "./controllers/delete-user.controller";
import { findUserByEmailController } from "./controllers/find-user-email.controller";
import { findUserByIdController } from "./controllers/find-user-id.controller";

const router = Router();

router.post("/users", createUserController);
router.get("/users", listUsersController);
router.get("/users/:email", findUserByEmailController);
router.get("/users/id/:id", findUserByIdController);
router.delete("/users/:id", deleteUserController);

export default router;
