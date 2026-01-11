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
      serviceIds,
    } = req.body;

    const appointmentDate = new Date(
      `${date}T12:00:00.000Z`,
    );

    const appointment =
      await createAppointmentService({
        clientId,
        barbershopId,
        startTime,
        endTime,
        date: appointmentDate,
        serviceIds,
      });

    return res.status(201).json(appointment);
  } catch (err: any) {
    return res
      .status(400)
      .json({ error: err.message });
  }
};
