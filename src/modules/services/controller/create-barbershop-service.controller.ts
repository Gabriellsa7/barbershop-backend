import { Request, Response } from 'express';
import { createBarbershopServiceService } from '../services/create-barbershop-service.service';

export const createBarbershopServiceController =
  async (req: Request, res: Response) => {
    try {
      const data = req.body;

      if (
        !data.name ||
        !data.price ||
        !data.durationMinutes ||
        !data.barbershopId
      ) {
        return res.status(400).json({
          error:
            'Name, price, durationMinutes, and barbershopId are required',
        });
      }

      const service =
        await createBarbershopServiceService(
          data,
        );

      return res.status(201).json(service);
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message });
    }
  };
