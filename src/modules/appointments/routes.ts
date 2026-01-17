import { Router } from 'express';
import { createAppointmentController } from './controllers/create-appointment.controller';
import { listAvailabilityController } from './controllers/availability.controller';
import { listAppointmentsByUserController } from './controllers/list-by-user.controller';
import { ensureAuthenticated } from '../../middleware/ensure-authenticated';
import { getAppointmentByBarbershopController } from './controllers/get-appointment-by-barbershop.controller';
import { getAppointmentByIdController } from './controllers/get-appointment-by-id.controller';
import { updateAppointmentStatusController } from './controllers/update-status.controller';

const router = Router();

router.post(
  '/appointment',
  createAppointmentController,
);

router.get(
  '/appointment/:id',
  getAppointmentByIdController,
);

//Insomina Test Exemple
//GET /appointments/availability?barbershopId=1&date=2026-01-10
//GET /appointments/availability?barbershopId=aea64e59-fc8c-497d-9d91-0689fe2eb733&date=2026-01-02

router.get(
  '/appointment/availability',
  listAvailabilityController,
);

router.get(
  '/appointment/user/:userId',
  listAppointmentsByUserController,
);

router.get(
  '/appointment/barbershop/:barbershopId',
  getAppointmentByBarbershopController,
);

router.patch(
  '/appointment/:id/status',
  updateAppointmentStatusController,
);

export default router;
