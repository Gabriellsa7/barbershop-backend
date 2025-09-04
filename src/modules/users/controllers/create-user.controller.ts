import { Request, Response } from "express";
import { createUserService } from "../services/create-user.service";
import { CreateUserDTO } from "../dtos/create-user.dto";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const data: CreateUserDTO = req.body; //take the body with DTO
    const user = await createUserService(data); //passes the entire DTO
    return res.status(201).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
