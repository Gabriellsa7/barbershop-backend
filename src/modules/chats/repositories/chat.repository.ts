import { prisma } from "../../../config/prisma";

export const chatRepository = {
  sendMessage: (data: {
    senderId: string;
    receiverId: string;
    message: string;
  }) => {
    return prisma.chatmessage.create({ data });
  },

  listMessagesBetweenUsers: (userId1: string, userId2: string) => {
    return prisma.chatmessage.findMany({
      where: {
        OR: [
          { senderId: userId1, receiverId: userId2 },
          { senderId: userId2, receiverId: userId1 },
        ],
      },
      orderBy: { timestamp: "asc" },
    });
  },
};
