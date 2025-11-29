import { prisma } from '../../../../lib/prisma';

export const reviewRepository = {
  create: (data: {
    rating: number;
    comment?: string;
    clientId: string;
    barbershopId: string;
  }) => {
    return prisma.review.create({ data });
  },

  listByBarbershop: (barbershopId: string) => {
    return prisma.review.findMany({
      where: { barbershopId },
      include: { user: true },
    });
  },
};
