import { Request, Response } from 'express';
import { updateAppointmentStatusService } from '../services/update-status.service';

export const updateAppointmentStatusController =
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated =
        await updateAppointmentStatusService(
          id,
          status,
        );

      return res.status(200).json(updated);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  };
