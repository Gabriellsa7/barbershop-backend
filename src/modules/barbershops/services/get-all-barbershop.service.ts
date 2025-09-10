import { barbershopRepository } from "../repositories/barbershop.repository";

export const getAllBarbershopService = async () => {
  const barbershops = await barbershopRepository.getAll();
  return barbershops;
};
