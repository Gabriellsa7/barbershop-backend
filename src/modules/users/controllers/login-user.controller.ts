import { Request, Response } from 'express';
import { loginService } from '../services/login-user.service';

export const loginController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await loginService.login(
        email,
        password,
      );

      req.session.userId = user.id;

      if (!email || !password) {
        return res.status(400).json({
          message:
            'Email and Password are required',
        });
      }

      return res.status(200).json({
        message: 'Login Successful',
        user,
      });
    } catch (error: any) {
      return res
        .status(401)
        .json({ message: error.message });
    }
  },
};
