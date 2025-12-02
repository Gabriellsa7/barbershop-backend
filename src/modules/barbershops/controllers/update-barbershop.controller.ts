import { Request, Response } from 'express';
import { updateBarbershopService } from '../services/update-barbershop.service';

export const updateBarbershopController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedBarbershop =
      await updateBarbershopService(id, data);

    return res
      .status(200)
      .json(updatedBarbershop);
  } catch (err: any) {
    if (
      err.message ===
      'You are not allowed to update this barbershop'
    ) {
      return res
        .status(403)
        .json({ error: err.message });
    }

    return res
      .status(400)
      .json({ error: err.message });
  }
};
