import { userRepository } from "../repositories/user.repository";

export const findUserByEmailService = async (email: string) => {
  return userRepository.findByEmail(email);
};
