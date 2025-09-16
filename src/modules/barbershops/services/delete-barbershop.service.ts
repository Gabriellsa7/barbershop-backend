import { barbershopRepository } from "../repositories/barbershop.repository";

export const deleteBarbershopService = async (id: string) => {
  if (!id) {
    throw new Error("ID is required");
  }
  return barbershopRepository.delete(id);
};
