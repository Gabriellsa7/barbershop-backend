import { createBarbershopService } from '../../modules/barbershops/services/create-barbershop.service';
import { barbershopRepository } from '../../modules/barbershops/repositories/barbershop.repository';
import { AppError } from '../../shared/errors/app-error';

jest.mock(
  '../../modules/barbershops/repositories/barbershop.repository',
  () => ({
    barbershopRepository: {
      create: jest.fn(),
    },
  }),
);

describe('createBarbershopService', () => {
  it('should call repository with correct data', async () => {
    (
      barbershopRepository.create as jest.Mock
    ).mockResolvedValue({
      id: 'barbershop-1',
    });

    const data = {
      name: 'My Barbershop',
      description: 'Nice place',
      address: 'Street 123',
      ownerId: 'user-1',
      latitude: -23.5,
      longitude: -46.6,
      image_url: 'http://image.png',
    };

    const result =
      await createBarbershopService(data);

    expect(
      barbershopRepository.create,
    ).toHaveBeenCalledWith(data);
    expect(result).toHaveProperty('id');
  });

  it('should throw error if name is missing', async () => {
    await expect(
      createBarbershopService({
        name: '',
        description: 'Nice place',
        address: 'Street 123',
        ownerId: 'user-1',
      } as any),
    ).rejects.toThrow('Name is required');

    expect(
      barbershopRepository.create,
    ).not.toHaveBeenCalled();
  });

  it('should throw error if description is missing', async () => {
    await expect(
      createBarbershopService({
        name: 'My Barbershop',
        description: '',
        address: 'Street 123',
        ownerId: 'user-1',
      } as any),
    ).rejects.toThrow('Description is required');

    expect(
      barbershopRepository.create,
    ).not.toHaveBeenCalled();
  });

  it('should throw AppError if name is missing', async () => {
    await expect(
      createBarbershopService({
        name: '',
        description: 'Nice place',
        address: 'Street 123',
        ownerId: 'user-1',
      } as any),
    ).rejects.toBeInstanceOf(AppError);
  });
});
