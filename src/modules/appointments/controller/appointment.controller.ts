import { Request, Response } from 'express';
import { createAppointmentService } from '../services/create-appointment.service';

export const createAppointmentConroller = async (
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
        date: new Date(date),
        startTime,
        endTime,
        clientId,
        barbershopId,
      });

    return res.status(201).json(appointment);
  } catch (error: any) {
    return res
      .status(400)
      .json({ error: error.message });
  }
};
