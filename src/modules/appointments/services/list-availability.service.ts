import { prisma } from '../../../../lib/prisma';

const SLOT_MINUTES = 30;

function timeToMinutes(time: string) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function minutesToTime(minutes: number) {
  const h = String(
    Math.floor(minutes / 60),
  ).padStart(2, '0');
  const m = String(minutes % 60).padStart(2, '0');
  return `${h}:${m}`;
}

export const listAvailabilityService = async (
  barbershopId: string,
  date: Date,
) => {
  const dayOfWeek = date.getDay();

  const closed = await prisma.closedday.findFirst(
    {
      where: {
        barbershopId,
        date,
      },
    },
  );

  if (closed) {
    return [];
  }

  const opening =
    await prisma.openinghours.findFirst({
      where: {
        barbershopId,
        dayOfWeek,
      },
    });

  if (!opening) {
    return [];
  }

  const appointments =
    await prisma.appointment.findMany({
      where: {
        barbershopId,
        date,
      },
    });

  const busySlots = appointments.map((a) => ({
    start: timeToMinutes(a.startTime),
    end: timeToMinutes(a.endTime),
  }));
  const slots = [];

  let current = timeToMinutes(opening.openTime);
  const end = timeToMinutes(opening.closeTime);

  while (current + SLOT_MINUTES <= end) {
    const slotStart = current;
    const slotEnd = current + SLOT_MINUTES;

    const hasConflict = busySlots.some(
      (b) =>
        slotStart < b.end && slotEnd > b.start,
    );

    if (!hasConflict) {
      slots.push({
        startTime: minutesToTime(slotStart),
        endTime: minutesToTime(slotEnd),
      });
    }

    current += SLOT_MINUTES;
  }

  return slots;
};
