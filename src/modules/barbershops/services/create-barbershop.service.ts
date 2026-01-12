import { AppError } from '../../../shared/errors/app-error';
import { barbershopRepository } from '../repositories/barbershop.repository';

type BarbershopCreateData = {
  name: string;
  description: string;
  address: string;
  ownerId: string;
  latitude?: number;
  longitude?: number;
  image_url?: string;
};

export const createBarbershopService = async (
  data: BarbershopCreateData,
) => {
  const {
    name,
    address,
    description,
    ownerId,
    latitude,
    longitude,
    image_url,
  } = data;

  if (!name?.trim()) {
    throw new AppError('Name is required');
  }

  if (!description?.trim()) {
    throw new AppError('Description is required');
  }

  if (!address?.trim()) {
    throw new AppError('Address is required');
  }

  if (!ownerId) {
    throw new AppError('Owner is required');
  }

  return barbershopRepository.create({
    name,
    description,
    address,
    ownerId,
    latitude,
    longitude,
    image_url,
  });
};
