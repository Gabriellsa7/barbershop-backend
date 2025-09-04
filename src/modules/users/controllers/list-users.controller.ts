import { Request, Response } from "express";
import { listUsersService } from "../services/list-users.service";

export const listUsersController = async (_req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(users);
};
