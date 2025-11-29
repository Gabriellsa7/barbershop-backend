import { prisma } from '../../../../lib/prisma';
import { payment_status } from '@prisma/client';

export const paymentRepository = {
  create: (data: {
    amount: number;
    method: string;
    appointmentId: string;
  }) => {
    return prisma.payment.create({ data });
  },

  findByAppointment: (appointmentId: string) => {
    return prisma.payment.findUnique({
      where: { appointmentId },
    });
  },

  updateStatus: (
    id: string,
    status: payment_status,
  ) => {
    return prisma.payment.update({
      where: { id },
      data: { status },
    });
  },
};
