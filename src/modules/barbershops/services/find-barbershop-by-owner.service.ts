import { barbershopRepository } from "../repositories/barbershop.repository";

export const findBarbershopByOwnerService = async (ownerId: string) => {
  if (!ownerId) {
    throw new Error("Owner ID is required");
  }

  return barbershopRepository.findByOwner(ownerId);
};
