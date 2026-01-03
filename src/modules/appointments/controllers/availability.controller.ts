import { Request, Response } from 'express';
import { listAvailabilityService } from '../services/list-availability.service';

export const listAvailabilityController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { barbershopId, date } = req.query;

    if (!barbershopId || !date) {
      return res.status(400).json({
        error:
          'barbershopId and date are required',
      });
    }

    const normalizedDate = new Date(
      date as string,
    );
    normalizedDate.setUTCHours(0, 0, 0, 0);

    const availability =
      await listAvailabilityService(
        barbershopId as string,
        normalizedDate,
      );

    return res.json(availability);
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
