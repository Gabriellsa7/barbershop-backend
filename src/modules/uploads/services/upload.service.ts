export class UploadService {
  async execute(
    file: Express.Multer.File | undefined,
  ) {
    if (!file) {
      throw new Error('No Image Sent');
    }

    return {
      url: `${process.env.BASE_URL}/uploads/${file.filename}`,
    };
  }
}
