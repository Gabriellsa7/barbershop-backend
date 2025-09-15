import { Request, Response } from "express";
import { deleteBarbershopService } from "../services/delete-barbershop.service";

export const deleteBarbershopController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.params.id;
    const barbershop = await deleteBarbershopService(data);
    return res.status(200).json("Barbershop deleted successfully");
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
