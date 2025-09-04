import { Request, Response } from "express";
import { deleteUserService } from "../services/delete-user.service";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const params = req.params.id;
    await deleteUserService(params);
    return res.status(200).json("User Deleted");
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
