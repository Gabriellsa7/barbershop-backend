import { barbershopRepository } from "../repositories/barbershop.repository";

export const findBarbershopByIdService = async (id: string) => {
  if (!id) {
    throw new Error("ID is required");
  }
  return barbershopRepository.findById(id);
};
