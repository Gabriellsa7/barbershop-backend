import { barbershopRepository } from "../repositories/barbershop.repository";

export const findBarbershopNearbyService = async (
  latitude: number,
  longitude: number,
  radiusKm: number = 5
) => {
  if (!latitude || !longitude) {
    throw new Error("Latitude and longitude are required");
  }

  return barbershopRepository.findNearby(latitude, longitude, radiusKm);
};
