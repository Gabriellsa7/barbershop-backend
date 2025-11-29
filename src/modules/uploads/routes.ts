import { Router } from 'express';
import { upload } from './multer-config';
import { UploadController } from './controllers/upload.controller';

const router = Router();

const controller = new UploadController();

router.post(
  '/upload',
  upload.single('image'),
  controller.handle,
);

export default router;
