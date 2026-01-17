import { cloudinary } from '../../../config/cloudinary';

export class UploadService {
  async execute(
    file: Express.Multer.File | undefined,
  ) {
    if (!file) {
      throw new Error('No image sent');
    }

    const uploadResult = await new Promise<any>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: 'barbershops',
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            },
          )
          .end(file.buffer);
      },
    );

    return {
      url: uploadResult.secure_url,
    };
  }
}
