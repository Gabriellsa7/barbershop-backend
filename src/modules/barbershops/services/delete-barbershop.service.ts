import { barbershopRepository } from "../repositories/barbershop.repository";

export const deleteBarbershopService = async (id: string) => {
  return barbershopRepository.delete(id);
};
