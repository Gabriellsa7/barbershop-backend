import { Request, Response } from 'express';
import { deleteBarbershopServiceService } from '../services/delete-barbershop-service.service';

export const deleteBarbershopServiceController =
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(400)
          .json({
            error: 'Service ID is required',
          });
      }

      await deleteBarbershopServiceService(id);

      return res.status(204).send();
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message });
    }
  };
