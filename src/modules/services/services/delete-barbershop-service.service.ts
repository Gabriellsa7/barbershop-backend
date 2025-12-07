import { serviceRepository } from '../repositories/service.repository';

export const deleteBarbershopServiceService =
  async (id: string) => {
    if (!id) {
      throw new Error('Service ID is required');
    }

    return serviceRepository.delete(id);
  };
