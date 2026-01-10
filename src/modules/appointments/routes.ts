import { Router } from 'express';
import { createAppointmentController } from './controllers/create-appointment.controller';
import { listAvailabilityController } from './controllers/availability.controller';
import { listAppointmentsByUserController } from './controllers/list-by-user.controller';
import { ensureAuthenticated } from '../../middleware/ensure-authenticated';

const router = Router();

router.post(
  '/appointment',
  createAppointmentController,
);

//Insomina Test Exemple
//GET /appointments/availability?barbershopId=1&date=2026-01-10
//GET /appointments/availability?barbershopId=aea64e59-fc8c-497d-9d91-0689fe2eb733&date=2026-01-02

router.get(
  '/appointment/availability',
  listAvailabilityController,
);

router.get(
  '/appointment/me',
  ensureAuthenticated,
  listAppointmentsByUserController,
);

export default router;
