import { prisma } from "../../../config/prisma";

export const userRepository = {
  findByEmail: (email: string) => {
    return prisma.user.findUnique({ where: { email } });
  },

  findById: (id: string) => {
    return prisma.user.findUnique({ where: { id } });
  },

  create: (data: { name: string; email: string; passwordHash: string }) => {
    // All users start as CLIENT, no need to pass role
    return prisma.user.create({ data });
  },

  findAll: () => {
    return prisma.user.findMany();
  },
};
