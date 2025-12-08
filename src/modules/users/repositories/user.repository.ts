import { prisma } from '../../../../lib/prisma';

export const userRepository = {
  findByEmail: (email: string) => {
    return prisma.user.findUnique({
      where: { email },
      include: {
        barbershop: true,
      },
    });
  },

  findById: (id: string) => {
    return prisma.user.findUnique({
      where: { id },
      include: {
        barbershop: true,
      },
    });
  },

  create: (data: {
    name: string;
    email: string;
    passwordHash: string;
  }) => {
    // All users start as CLIENT, no need to pass role
    return prisma.user.create({ data });
  },

  findAll: () => {
    return prisma.user.findMany();
  },

  delete: (id: string) => {
    return prisma.user.delete({ where: { id } });
  },

  update: (
    id: string,
    data: Partial<{
      name: string;
      email: string;
      image_url: string;
      passwordHash: string;
    }>,
  ) => {
    return prisma.user.update({
      where: { id },
      data,
    });
  },
};
