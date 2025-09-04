import { userRepository } from "../repositories/user.repository";

export const findUserByIdService = async (id: string) => {
  return userRepository.findById(id);
};
