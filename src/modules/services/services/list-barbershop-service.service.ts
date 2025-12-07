import { serviceRepository } from '../repositories/service.repository';

export const listBarbershopServiceService =
  async (barbershopId: string) => {
    const services =
      await serviceRepository.listByBarbershop(
        barbershopId,
      );
    return services;
  };
