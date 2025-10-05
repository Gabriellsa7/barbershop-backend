import { barbershopRepository } from "../repositories/barbershop.repository";

type BarbershopCreateData = {
  name: string;
  description: string;
  address: string;
  ownerId: string;
  latitude: number;
  longitude: number;
  image_url?: string;
};

export const createBarbershopService = async (data: BarbershopCreateData) => {
  const {
    name,
    address,
    description,
    ownerId,
    latitude,
    longitude,
    image_url,
  } = data;

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
