import { Request, Response } from 'express';
import { listBarbershopServiceService } from '../services/list-barbershop-service.service';

export const listBarbershopServiceController =
  async (req: Request, res: Response) => {
    try {
      const { barbershopId } = req.params;

      if (!barbershopId) {
        return res
          .status(400)
          .json({
            error: 'Barbershop ID is required',
          });
      }

      const services =
        await listBarbershopServiceService(
          barbershopId,
        );

      return res.status(200).json(services);
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message });
    }
  };
