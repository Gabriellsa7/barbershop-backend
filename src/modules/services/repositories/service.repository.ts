import { prisma } from "../../../config/prisma";

export const serviceRepository = {
  create: (data: {
    name: string;
    description?: string;
    price: number;
    durationMinutes: number;
    barbershopId: string;
  }) => {
    return prisma.service.create({ data });
  },

  listByBarbershop: (barbershopId: string) => {
    return prisma.service.findMany({ where: { barbershopId } });
  },

  delete: (id: string) => {
    return prisma.service.delete({ where: { id } });
  },
};
