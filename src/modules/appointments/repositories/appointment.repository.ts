// src/modules/appointments/repositories/appointment.repository.ts
import { prisma } from '../../../../lib/prisma';
import { appointment_status } from '../../../../generated/prisma/client/enums';

export const appointmentRepository = {
  create: (data: {
    date: Date;
    startTime: string;
    endTime: string;
    clientId: string;
    barbershopId: string;
  }) => {
    return prisma.appointment.create({ data });
  },

  findById: (id: string) => {
    return prisma.appointment.findUnique({
      where: { id },
      include: {
        appointmentservice: true,
        payment: true,
      },
    });
  },

  listByUser: (clientId: string) => {
    return prisma.appointment.findMany({
      where: { clientId },
      include: {
        barbershop: true,
        appointmentservice: true,
      },
    });
  },

  listByBarbershop: (barbershopId: string) => {
    return prisma.appointment.findMany({
      where: { barbershopId },
      include: {
        user: true,
        appointmentservice: true,
      },
    });
  },

  updateStatus: (
    id: string,
    status: appointment_status,
  ) => {
    return prisma.appointment.update({
      where: { id },
      data: { status },
    });
  },

  async findConflict(
    barbershopId: string,
    date: Date,
    start: string,
    end: string,
  ) {
    return prisma.appointment.findFirst({
      where: {
        barbershopId,
        date,
        OR: [
          {
            startTime: { lte: end },
            endTime: { gte: start },
          },
        ],
      },
    });
  },
};
