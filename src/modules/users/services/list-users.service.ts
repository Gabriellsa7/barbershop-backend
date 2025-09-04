import { userRepository } from "../repositories/user.repository";

export const listUsersService = async () => {
  return userRepository.findAll();
};
