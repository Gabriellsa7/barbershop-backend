import { Request, Response } from 'express';
import { updateUserService } from '../services/update-user.service';

export const updateUserController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedUser = await updateUserService(
      id,
      data,
    );

    return res.status(200).json(updatedUser);
  } catch (err: any) {
    if (
      err.message ===
      'You are not allowed to update this user'
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
