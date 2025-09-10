import { Request, Response } from "express";
import { getAllBarbershopService } from "../services/get-all-barbershop.service";

export const getAllBarbershopController = async (
  req: Request,
  res: Response
) => {
  try {
    const barbershops = await getAllBarbershopService();
    return res.status(200).json(barbershops);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
