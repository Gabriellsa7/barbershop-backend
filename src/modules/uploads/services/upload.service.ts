export class UploadService {
  async execute(
    file: Express.Multer.File | undefined,
  ) {
    if (!file) {
      throw new Error('Nenhuma imagem enviada');
    }

    return {
      url: `/uploads/${file.filename}`,
    };
  }
}
