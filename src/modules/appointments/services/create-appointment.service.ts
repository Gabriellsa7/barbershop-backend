import { appointmentRepository } from '../repositories/appointment.repository';

type AppointmentCreateDataProps = {
  date: Date;
  startTime: string;
  endTime: string;
  clientId: string;
  barbershopId: string;
  serviceIds: string[];
};

export const createAppointmentService = async (
  data: AppointmentCreateDataProps,
) => {
  const {
    barbershopId,
    clientId,
    date,
    endTime,
    startTime,
    serviceIds,
  } = data;

  if (!startTime || !endTime) {
    throw new Error(
      'Start and end time are required',
    );
  }

  if (!serviceIds || serviceIds.length === 0) {
    throw new Error('serviceIds is required');
  }

  const conflict =
    await appointmentRepository.findConflict(
      barbershopId,
      date,
      startTime,
      endTime,
    );

  if (conflict) {
    throw new Error(
      'There is already an appointment in this time range',
    );
  }

  return appointmentRepository.create({
    barbershopId,
    clientId,
    date,
    endTime,
    startTime,
    serviceIds,
  });
};
