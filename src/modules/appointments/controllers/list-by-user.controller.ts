import { Request, Response } from 'express';
import { listAppointmentsByUserService } from '../services/list-by-user.service';

export const listAppointmentsByUserController =
  async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({
          error: 'User ID is required',
        });
      }

      const appointments =
        await listAppointmentsByUserService(
          userId,
        );

      return res.status(200).json(appointments);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  };
