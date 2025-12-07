import { serviceRepository } from '../repositories/service.repository';

interface CreateBarbershopServiceService {
  name: string;
  description?: string;
  price: number;
  durationMinutes: number;
  barbershopId: string;
  image_url?: string;
}

export const createBarbershopServiceService =
  async (
    data: CreateBarbershopServiceService,
  ) => {
    const {
      name,
      description,
      price,
      durationMinutes,
      barbershopId,
      image_url,
    } = data;

    return serviceRepository.create({
      name,
      description,
      price,
      durationMinutes,
      barbershopId,
      image_url,
    });
  };
