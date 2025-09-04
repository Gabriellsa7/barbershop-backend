import bcrypt from "bcrypt";
import { userRepository } from "../repositories/user.repository";
import { CreateUserDTO } from "../dtos/create-user.dto";

export const createUserService = async (data: CreateUserDTO) => {
  const { name, email, password } = data;

  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    throw new Error("Email Already in Use");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  return userRepository.create({
    name,
    email,
    passwordHash,
  });
};
