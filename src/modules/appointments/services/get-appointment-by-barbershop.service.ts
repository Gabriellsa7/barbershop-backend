import { appointmentRepository } from '../repositories/appointment.repository';

export const getAppointmentByBarbershopService =
  async (barbershopId: string) => {
    if (!barbershopId) {
      throw new Error(
        'Barbershop ID is required',
      );
    }

    return appointmentRepository.listByBarbershop(
      barbershopId,
    );
  };
