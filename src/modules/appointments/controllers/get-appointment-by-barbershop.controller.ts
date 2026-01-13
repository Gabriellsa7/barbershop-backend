import { Request, Response } from 'express';
import { getAppointmentByBarbershopService } from '../services/get-appointment-by-barbershop.service';

export const getAppointmentByBarbershopController =
  async (req: Request, res: Response) => {
    const { barbershopId } = req.params;

    try {
      const appointments =
        await getAppointmentByBarbershopService(
          barbershopId,
        );

      return res.status(200).json(appointments);
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message });
    }
  };
