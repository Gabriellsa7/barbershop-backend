import { Router } from 'express';
import userRoutes from '../modules/users/routes';
import barbershopRoutes from '../modules/barbershops/routes';
import uploadRoutes from '../modules/uploads/routes';
import barbershopServiceRoutes from '../modules/services/routes';

const router = Router();

router.use('/api', userRoutes);
router.use('/api', barbershopRoutes);
router.use('/api', uploadRoutes);
router.use('/api', barbershopServiceRoutes);

export default router;
