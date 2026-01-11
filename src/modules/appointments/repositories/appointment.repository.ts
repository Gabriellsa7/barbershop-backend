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
    serviceIds: string[];
  }) => {
    return prisma.appointment.create({
      data: {
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        clientId: data.clientId,
        barbershopId: data.barbershopId,

        appointmentservice: {
          create: data.serviceIds.map(
            (serviceId) => ({
              serviceId,
            }),
          ),
        },
      },
      include: {
        barbershop: {
          select: {
            id: true,
            name: true,
          },
        },
        appointmentservice: {
          include: {
            service: {
              select: {
                id: true,
                name: true,
                price: true,
                durationMinutes: true,
              },
            },
          },
        },
      },
    });
  },

  listByDate(barbershopId: string, date: Date) {
    return prisma.appointment.findMany({
      where: {
        barbershopId,
        date,
      },
      select: {
        startTime: true,
        endTime: true,
      },
    });
  },

  findById: (id: string) => {
    return prisma.appointment.findUnique({
      where: { id },
      include: {
        barbershop: {
          select: {
            id: true,
            name: true,
          },
        },
        appointmentservice: {
          include: {
            service: {
              select: {
                id: true,
                name: true,
                price: true,
                durationMinutes: true,
              },
            },
          },
        },
        payment: true,
      },
    });
  },

  listByUser: (clientId: string) => {
    return prisma.appointment.findMany({
      where: { clientId },
      include: {
        barbershop: {
          select: {
            id: true,
            name: true,
          },
        },
        appointmentservice: {
          include: {
            service: {
              select: {
                id: true,
                name: true,
                price: true,
                durationMinutes: true,
              },
            },
          },
        },
      },
    });
  },

  listByBarbershop: (barbershopId: string) => {
    return prisma.appointment.findMany({
      where: { barbershopId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        appointmentservice: {
          include: {
            service: {
              select: {
                id: true,
                name: true,
                price: true,
                durationMinutes: true,
              },
            },
          },
        },
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
