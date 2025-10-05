import { prisma } from "../../../config/prisma";

export const barbershopRepository = {
  create: async (data: {
    name: string;
    description?: string;
    address: string;
    latitude: number;
    longitude: number;
    ownerId: string;
    image_url?: string;
  }) => {
    return prisma.barbershop.create({ data });
  },

  findNearby: async (lat: number, lng: number, radiusKm: number = 5) => {
    return prisma.$queryRawUnsafe(
      `
      SELECT 
        b.*,
        (6371 * acos(
          cos(radians(${lat})) * cos(radians(b.latitude)) *
          cos(radians(b.longitude) - radians(${lng})) +
          sin(radians(${lat})) * sin(radians(b.latitude))
        )) AS distance
      FROM barbershop b
      WHERE b.latitude IS NOT NULL AND b.longitude IS NOT NULL
      HAVING distance <= ${radiusKm}
      ORDER BY distance ASC
      `
    );
  },

  findById: async (id: string) => {
    return prisma.barbershop.findUnique({
      where: { id },
      include: {
        user: true,
        service: true,
        openinghours: true,
        closedday: true,
      },
    });
  },

  findByOwner: async (ownerId: string) => {
    return prisma.barbershop.findMany({
      where: { ownerId },
      include: {
        service: true,
        appointment: true,
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
      image_url?: string;
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

  getAll: async () => {
    return prisma.barbershop.findMany();
  },
};
