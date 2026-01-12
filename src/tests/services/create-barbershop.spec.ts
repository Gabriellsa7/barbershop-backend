import { createBarbershopService } from '../../modules/barbershops/services/create-barbershop.service';
import { barbershopRepository } from '../../modules/barbershops/repositories/barbershop.repository';

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
});
