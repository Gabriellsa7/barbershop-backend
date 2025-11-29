import { Router } from 'express';
import userRoutes from '../modules/users/routes';
import barbershopRoutes from '../modules/barbershops/routes';
import uploadRoutes from '../modules/uploads/routes';

const router = Router();

router.use('/api', userRoutes);
router.use('/api', barbershopRoutes);
router.use('/api', uploadRoutes);

export default router;
