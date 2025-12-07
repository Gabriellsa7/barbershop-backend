import { Router } from 'express';
import { createBarbershopServiceController } from './controller/create-barbershop-service.controller';
import { listBarbershopServiceController } from './controller/list-barbershop-service.controller';

const router = Router();

router.post(
  '/service',
  createBarbershopServiceController,
);

router.get(
  '/service/:barbershopId',
  listBarbershopServiceController,
);
export default router;
