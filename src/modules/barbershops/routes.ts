import { Router } from 'express';
import { createBarbershopController } from './controllers/create-barbershop.controller';
import { getAllBarbershopController } from './controllers/get-all-barbershop.controller';
import { findBarbershopByOwnerController } from './controllers/find-barbershop-by-owner.controller';
import { findBarbershopByIdController } from './controllers/find-barbershop-by-id.controller';
import { deleteBarbershopController } from './controllers/delete-barbershop.controller';
import { updateBarbershopController } from './controllers/update-barbershop.controller';
import { findBarbershopNearbyController } from './controllers/find-barbershop-nearby.controller';

const router = Router();

router.post(
  '/barbershop',
  createBarbershopController,
);
router.get(
  '/barbershop',
  getAllBarbershopController,
);
router.get(
  '/barbershop/owner/:id',
  findBarbershopByOwnerController,
);
router.get(
  '/barbershop/:id',
  findBarbershopByIdController,
);
router.delete(
  '/barbershop/:id',
  deleteBarbershopController,
);
router.put(
  '/barbershop/:id',
  updateBarbershopController,
);
router.get(
  '/nearby',
  findBarbershopNearbyController,
);

export default router;
