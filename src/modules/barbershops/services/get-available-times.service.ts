import { AppError } from '../../../shared/errors/app-error';
import { barbershopRepository } from '../repositories/barbershop.repository';

type GetAvailableTimesParams = {
  barbershopId: string;
  date: string;
  serviceId: string;
};

export const getAvailableTimesService = async ({
  barbershopId,
  date,
  serviceId,
}: GetAvailableTimesParams): Promise<
  string[]
> => {
  if (!barbershopId || !date || !serviceId) {
    throw new AppError('Missing required params');
  }

  const barbershop =
    await barbershopRepository.findByIdWithSchedule(
      barbershopId,
    );

  if (!barbershop) {
    throw new AppError(
      'Barbershop not found',
      404,
    );
  }

  const isClosedDay = barbershop.closedday.some(
    (c) =>
      c.date.toISOString().split('T')[0] === date,
  );

  if (isClosedDay) return [];

  const [year, month, day] = date
    .split('-')
    .map(Number);

  const jsDay = new Date(
    year,
    month - 1,
    day,
  ).getDay(); // 0–6 (local, sem UTC)

  const dayOfWeek = jsDay === 0 ? 7 : jsDay; // 1–7 (padrão do banco)

  const opening = barbershop.openinghours.find(
    (o) => o.dayOfWeek === dayOfWeek,
  );

  if (!opening) return [];

  const service =
    await barbershopRepository.findServiceById(
      serviceId,
    );

  if (!service) {
    throw new AppError('Service not found', 404);
  }

  let slots = generateSlots(
    opening.openTime,
    opening.closeTime,
    service.durationMinutes,
  );

  if (opening.lunchStart && opening.lunchEnd) {
    const lunchStart = timeToMinutes(
      opening.lunchStart,
    );
    const lunchEnd = timeToMinutes(
      opening.lunchEnd,
    );

    slots = slots.filter((time) => {
      const slotMinutes = timeToMinutes(time);

      return (
        slotMinutes < lunchStart ||
        slotMinutes >= lunchEnd
      );
    });
  }

  const appointments =
    await barbershopRepository.findAppointmentsByDate(
      barbershopId,
      date,
    );

  slots = slots.filter((slot) => {
    return !appointments.some((appointment) =>
      isOverlapping(
        slot,
        service.durationMinutes,
        appointment.startTime,
        appointment.endTime,
      ),
    );
  });
  const todayISO = new Date()
    .toISOString()
    .split('T')[0];

  if (date === todayISO) {
    const now = new Date();

    slots = slots.filter((time) => {
      const [h, m] = time.split(':').map(Number);
      const slotDate = new Date();
      slotDate.setHours(h, m, 0, 0);
      return slotDate > now;
    });
  }

  return slots;
};

const generateSlots = (
  start: string,
  end: string,
  duration: number,
): string[] => {
  const slots: string[] = [];

  let current = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);

  while (current + duration <= endMinutes) {
    slots.push(minutesToTime(current));
    current += duration;
  }

  return slots;
};

const timeToMinutes = (time: string): number => {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
};

const minutesToTime = (
  minutes: number,
): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

const addMinutes = (
  time: string,
  minutes: number,
): string => {
  const [h, m] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(h, m + minutes, 0, 0);

  return `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes(),
  ).padStart(2, '0')}`;
};

const isOverlapping = (
  slotStart: string,
  slotDuration: number,
  appointmentStart: string,
  appointmentEnd: string,
): boolean => {
  const slotStartMin = timeToMinutes(slotStart);
  const slotEndMin = slotStartMin + slotDuration;

  const apptStartMin = timeToMinutes(
    appointmentStart,
  );
  const apptEndMin = timeToMinutes(
    appointmentEnd,
  );

  return (
    slotStartMin < apptEndMin &&
    slotEndMin > apptStartMin
  );
};
