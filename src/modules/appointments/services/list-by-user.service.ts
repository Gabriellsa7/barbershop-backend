import { appointmentRepository } from '../repositories/appointment.repository';

export const listAppointmentsByUserService =
  async (userId: string) => {
    if (!userId) {
      throw new Error('User ID is required');
    }

    return appointmentRepository.listByUser(
      userId,
    );
  };
