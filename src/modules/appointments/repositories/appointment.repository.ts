// src/modules/appointments/repositories/appointment.repository.ts
import { prisma } from "../../../config/prisma";
import { appointment_status } from "@prisma/client";

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
      include: { appointmentservice: true, payment: true },
    });
  },

  listByUser: (clientId: string) => {
    return prisma.appointment.findMany({
      where: { clientId },
      include: { barbershop: true, appointmentservice: true },
    });
  },

  listByBarbershop: (barbershopId: string) => {
    return prisma.appointment.findMany({
      where: { barbershopId },
      include: { user: true, appointmentservice: true },
    });
  },

  updateStatus: (id: string, status: appointment_status) => {
    return prisma.appointment.update({
      where: { id },
      data: { status },
    });
  },
};
