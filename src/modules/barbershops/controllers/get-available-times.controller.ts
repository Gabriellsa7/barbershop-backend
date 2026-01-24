import { Request, Response } from 'express';
import { getAvailableTimesService } from '../services/get-available-times.service';

export const getAvailableTimesController = async (
  req: Request,
  res: Response,
) => {
  const { barbershopId } = req.params;
  const { date, serviceId } = req.query;

  const times = await getAvailableTimesService({
    barbershopId,
    date: String(date),
    serviceId: String(serviceId),
  });

  return res.json(times);
};
