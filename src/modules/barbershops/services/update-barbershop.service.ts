import { barbershopRepository } from "../repositories/barbershop.repository";

type UpdateBarbershopDTO = {
  name?: string;
  description?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  image_url?: string;
};

export const updateBarbershopService = async (
  id: string,
  data: UpdateBarbershopDTO
) => {
  if (!id) {
    throw new Error("ID is required");
  }

  const barbershop = await barbershopRepository.findById(id);

  if (!barbershop) {
    throw new Error("Barbershop not found");
  }

  const updated = await barbershopRepository.update(id, data);

  return updated;
};
