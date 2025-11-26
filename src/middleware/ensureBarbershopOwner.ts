import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";

export const isBarbershopOwner = async (
  req: Request & { user?: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user?.id;
    const barbershopId = req.params.barbershopId;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const barbershop = await prisma.barbershop.findFirst({
      where: {
        id: barbershopId,
        ownerId: userId,
      },
    });

    if (!barbershop) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
