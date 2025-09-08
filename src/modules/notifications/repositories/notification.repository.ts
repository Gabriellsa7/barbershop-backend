// src/modules/notifications/repositories/notification.repository.ts
import { prisma } from "../../../config/prisma";

export const notificationRepository = {
  create: (data: { message: string; type: string; userId: string }) => {
    return prisma.notification.create({ data });
  },

  listByUser: (userId: string) => {
    return prisma.notification.findMany({ where: { userId } });
  },

  markAsRead: (id: string) => {
    return prisma.notification.update({
      where: { id },
      data: { readAt: new Date() },
    });
  },
};
