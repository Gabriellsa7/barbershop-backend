import { appointment_status } from '../../../../generated/prisma/client/enums';
import { appointmentRepository } from '../repositories/appointment.repository';

export const updateAppointmentStatusService =
  async (
    appointmentId: string,
    status: appointment_status,
  ) => {
    if (!appointmentId) {
      throw new Error(
        'Appointment ID is required',
      );
    }

    if (
      !Object.values(appointment_status).includes(
        status,
      )
    ) {
      throw new Error(
        'Invalid appointment status',
      );
    }

    return appointmentRepository.updateStatus(
      appointmentId,
      status,
    );
  };
