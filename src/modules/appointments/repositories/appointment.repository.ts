// src/modules/appointments/repositories/appointment.repository.ts
import { prisma } from "../../../config/prisma";
import { AppointmentStatus } from "@prisma/client";

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
      include: { services: true, payment: true },
    });
  },

  listByUser: (clientId: string) => {
    return prisma.appointment.findMany({
      where: { clientId },
      include: { barbershop: true, services: true },
    });
  },

  listByBarbershop: (barbershopId: string) => {
    return prisma.appointment.findMany({
      where: { barbershopId },
      include: { client: true, services: true },
    });
  },

  updateStatus: (id: string, status: AppointmentStatus) => {
    return prisma.appointment.update({
      where: { id },
      data: { status },
    });
  },
};
