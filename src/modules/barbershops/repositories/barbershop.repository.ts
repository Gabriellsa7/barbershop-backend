import { prisma } from "../../../config/prisma";

export const barbershopRepository = {
  create: (data: {
    name: string;
    description?: string;
    address: string;
    latitude?: number;
    longitude?: number;
    ownerId: string;
  }) => {
    return prisma.barbershop.create({ data });
  },

  findNearby: async (lat: number, lng: number, radiusKm: number = 5) => {
    const kmToDegree = 0.009; // ~1km em graus
    return prisma.barbershop.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null },
        AND: [
          {
            latitude: {
              gte: lat - radiusKm * kmToDegree,
              lte: lat + radiusKm * kmToDegree,
            },
          },
          {
            longitude: {
              gte: lng - radiusKm * kmToDegree,
              lte: lng + radiusKm * kmToDegree,
            },
          },
        ],
      },
    });
  },

  findById: async (id: string) => {
    return prisma.barbershop.findUnique({
      where: { id },
      include: {
        owner: true,
        services: true,
        openingHours: true,
        closedDays: true,
      },
    });
  },

  findByOwner: async (ownerId: string) => {
    return prisma.barbershop.findMany({
      where: { ownerId },
      include: {
        services: true,
        appointments: true,
      },
    });
  },

  update: async (
    id: string,
    data: {
      name?: string;
      description?: string;
      address?: string;
      latitude?: number;
      longitude?: number;
    }
  ) => {
    return prisma.barbershop.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.barbershop.delete({
      where: { id },
    });
  },
};
