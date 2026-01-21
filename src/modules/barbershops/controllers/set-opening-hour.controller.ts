import { Request, Response } from 'express';
import { setOpeningHoursService } from '../services/set-opening-hour.service';

type AuthRequest = Request & {
  user?: {
    id: string;
  };
};

export const setOpeningHoursController = async (
  req: AuthRequest,
  res: Response,
) => {
  const { id } = req.params;
  const ownerId = req.user?.id;
  const { hours } = req.body;

  if (!ownerId) {
    return res.status(401).json({
      message: 'User not authenticated',
    });
  }

  const result = await setOpeningHoursService(
    id,
    ownerId,
    hours,
  );

  return res.json(result);
};
