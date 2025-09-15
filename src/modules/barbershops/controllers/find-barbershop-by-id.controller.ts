import { Request, Response } from "express";
import { findBarbershopByIdService } from "../services/find-barbershop-by-id.service";

export const findBarbershopByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.params.id;
    const barbershop = await findBarbershopByIdService(data);
    return res.status(200).json(barbershop);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
