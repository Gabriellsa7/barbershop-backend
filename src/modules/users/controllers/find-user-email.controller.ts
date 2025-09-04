import { Request, Response } from "express";
import { findUserByEmailService } from "../services/find-user-email.service";

export const findUserByEmailController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.params.email;
    const user = await findUserByEmailService(data);
    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
