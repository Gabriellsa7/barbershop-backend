import { Request, Response } from 'express';
import { UploadService } from '../services/upload.service';

export class UploadController {
  async handle(req: Request, res: Response) {
    try {
      const service = new UploadService();
      const result = await service.execute(
        req.file,
      );

      return res.json(result);
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message });
    }
  }
}
