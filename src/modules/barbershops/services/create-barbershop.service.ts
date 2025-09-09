import { barbershopRepository } from "../repositories/barbershop.repository";

type BarbershopCreateData = {
  name: string;
  description: string;
  address: string;
  ownerId: string;
  latitude: number;
  longitude: number;
};

export const createBarbershopService = async (data: BarbershopCreateData) => {
  const { name, address, description, ownerId, latitude, longitude } = data;

  return barbershopRepository.create({
    name,
    description,
    address,
    ownerId,
    latitude,
    longitude,
  });
};
