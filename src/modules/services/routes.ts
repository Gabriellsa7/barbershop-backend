import { Router } from 'express';
import { createBarbershopServiceController } from './controller/create-barbershop-service.controller';
import { listBarbershopServiceController } from './controller/list-barbershop-service.controller';
import { deleteBarbershopServiceController } from './controller/delete-barbershop-service.controller';

const router = Router();

router.post(
  '/service',
  createBarbershopServiceController,
);

router.get(
  '/service/:barbershopId',
  listBarbershopServiceController,
);

router.delete(
  '/service/:id',
  deleteBarbershopServiceController,
);
export default router;
