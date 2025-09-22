import { Request, Response } from "express";
import { findBarbershopNearbyService } from "../services/find-barbershop-nearby.service";

export const findBarbershopNearbyController = async (
  req: Request,
  res: Response
) => {
  try {
    const { lat, lng, radius } = req.query;

    if (!lat || !lng) {
      return res
        .status(400)
        .json({ error: "Latitude and longitude are required" });
    }

    const barbershops = await findBarbershopNearbyService(
      Number(lat),
      Number(lng),
      radius ? Number(radius) : 5
    );

    return res.status(200).json(barbershops);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};
