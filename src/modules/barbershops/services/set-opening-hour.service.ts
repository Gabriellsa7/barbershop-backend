import { AppError } from '../../../shared/errors/app-error';
import { OpeningHourInput } from '../dtos/opening-hour.input';
import { barbershopRepository } from '../repositories/barbershop.repository';

export const setOpeningHoursService = async (
  barbershopId: string,
  ownerId: string,
  hours: OpeningHourInput[],
) => {
  const barbershop =
    await barbershopRepository.findById(
      barbershopId,
    );

  if (!barbershop) {
    throw new AppError(
      'Barbearia não encontrada',
    );
  }

  if (barbershop.ownerId !== ownerId) {
    throw new AppError(
      'Você não é dono dessa barbearia',
      403,
    );
  }

  if (!hours.length) {
    throw new AppError(
      'Informe ao menos um dia de funcionamento',
    );
  }

  await barbershopRepository.deleteOpeningHours(
    barbershopId,
  );
  await barbershopRepository.createOpeningHours(
    barbershopId,
    hours,
  );

  return { success: true };
};
