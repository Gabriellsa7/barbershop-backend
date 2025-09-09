import { Request, Response } from "express";
import { createBarbershopService } from "../services/create-barbershop.service";

export const createBarbershopController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).json({
        error: "Name, address, and ownerId are required",
      });
    }

    const barbershop = await createBarbershopService(data);

    return res.status(201).json(barbershop);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
