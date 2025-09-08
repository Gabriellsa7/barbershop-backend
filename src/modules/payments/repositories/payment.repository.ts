// src/modules/payments/repositories/payment.repository.ts
import { prisma } from "../../../config/prisma";
import { PaymentStatus } from "@prisma/client";

export const paymentRepository = {
  create: (data: { amount: number; method: string; appointmentId: string }) => {
    return prisma.payment.create({ data });
  },

  findByAppointment: (appointmentId: string) => {
    return prisma.payment.findUnique({ where: { appointmentId } });
  },

  updateStatus: (id: string, status: PaymentStatus) => {
    return prisma.payment.update({ where: { id }, data: { status } });
  },
};
