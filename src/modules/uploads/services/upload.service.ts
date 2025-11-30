export class UploadService {
  async execute(
    file: Express.Multer.File | undefined,
  ) {
    if (!file) {
      throw new Error('No Image Sent');
    }

    return {
      url: `/uploads/${file.filename}`,
    };
  }
}
