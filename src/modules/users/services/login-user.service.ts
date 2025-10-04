import { userRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt";

export const loginService = {
  login: async (email: string, password: string) => {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      throw new Error("Wrong password");
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  },
};
