import {
  Request,
  Response,
  NextFunction,
} from 'express';

export function ensureAuthenticated(
  req: Request & { user?: { id: string } },
  res: Response,
  next: NextFunction,
) {
  if (!req.session.userId) {
    return res.status(401).json({
      message: 'User not authenticated',
    });
  }

  req.user = {
    id: req.session.userId,
  };

  next();
}
