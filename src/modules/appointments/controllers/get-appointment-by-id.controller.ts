import { Request, Response } from 'express';
import { getAppointmentByIdService } from '../services/get-appointment-by-id.service';

export const getAppointmentByIdController =
  async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const appointment =
        await getAppointmentByIdService(id);

      return res.status(200).json(appointment);
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message });
    }
  };
