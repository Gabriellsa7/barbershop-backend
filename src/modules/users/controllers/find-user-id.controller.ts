import { Request, Response } from "express";
import { findUserByIdService } from "../services/find-user-id.service";

export const findUserByIdController = async (req: Request, res: Response) => {
  try {
    const data = req.params.id;
    const user = await findUserByIdService(data);
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
