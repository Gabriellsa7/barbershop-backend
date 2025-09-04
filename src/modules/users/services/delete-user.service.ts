import { userRepository } from "../repositories/user.repository";

export const deleteUserService = async (id: string) => {
  return userRepository.delete(id);
};
