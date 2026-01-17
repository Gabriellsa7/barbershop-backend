import { appointmentRepository } from '../repositories/appointment.repository';

export const getAppointmentByIdService = (
  id: string,
) => {
  if (!id) {
    throw new Error('Appointment ID is required');
  }

  return appointmentRepository.findById(id);
};
