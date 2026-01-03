import { Request, Response } from 'express';
import { createAppointmentService } from '../services/create-appointment.service';

export const createAppointmentController = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).json({
        error:
          'Date, startTime, endTime, clientId, and barbershopId are required',
      });
    }
    const appointment =
      await createAppointmentService(data);

    return res.status(201).json(appointment);
  } catch (err: any) {
    return res
      .status(400)
      .json({ error: err.message });
  }
};
