import { Request, Response } from 'express';
import { listAppointmentsByUserService } from '../services/list-by-user.service';

export const listAppointmentsByUserController =
  async (req: Request, res: Response) => {
    try {
      const userId = req.session.userId;

      if (!userId) {
        return res.status(401).json({
          error: 'User not authenticated',
        });
      }

      const appointments =
        await listAppointmentsByUserService(
          userId,
        );

      return res.json(appointments);
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message });
    }
  };
