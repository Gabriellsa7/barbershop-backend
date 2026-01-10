import { Request, Response } from 'express';
import { createAppointmentService } from '../services/create-appointment.service';

export const createAppointmentController = async (
  req: Request,
  res: Response,
) => {
  try {
    const {
      date,
      startTime,
      endTime,
      clientId,
      barbershopId,
    } = req.body;

    const appointment =
      await createAppointmentService({
        clientId,
        barbershopId,
        startTime,
        endTime,
        date: new Date(`${date}T00:00:00.000Z`),
      });

    return res.status(201).json(appointment);
  } catch (err: any) {
    return res
      .status(400)
      .json({ error: err.message });
  }
};
