import { Request, Response } from "express";
import { findBarbershopByOwnerService } from "../services/find-barbershop-by-owner.service";

export const findBarbershopByOwnerContorller = async (
  req: Request,
  res: Response
) => {
  try {
    const ownerId = req.params.id;
    const barbershop = await findBarbershopByOwnerService(ownerId);
    return res.status(200).json(barbershop);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
