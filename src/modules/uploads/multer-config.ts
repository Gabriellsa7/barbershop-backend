import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: path.resolve('uploads'),

  filename: (req, file, callback) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}${ext}`;
    callback(null, name);
  },
});

export const upload = multer({ storage });
