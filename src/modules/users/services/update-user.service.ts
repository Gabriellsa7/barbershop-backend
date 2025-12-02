import { userRepository } from '../repositories/user.repository';

type UpdateUserDTO = {
  name?: string;
  email?: string;
  password?: string;
  image_url?: string;
};

export const updateUserService = async (
  id: string,
  data: UpdateUserDTO,
) => {
  if (!id) {
    throw new Error('ID is required');
  }

  const user = await userRepository.findById(id);

  if (!user) {
    throw new Error('User not found');
  }

  const updated = await userRepository.update(
    id,
    data,
  );

  return updated;
};
