import { appointmentRepository } from '../repositories/appointment.repository';

export const listAvailabilityService = async (
  barbershopId: string,
  date: Date,
) => {
  const appointments =
    await appointmentRepository.listByDate(
      barbershopId,
      date,
    );

  return appointments;
};
