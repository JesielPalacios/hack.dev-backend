import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../utils/config';
import UserSchema, { IUser } from '../models/user.model';

class AuthControlador {
  public async sigIn(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    if (!email || !req.body.password) {
      return res.status(400).json({ message: 'Error1' });
    }

    const user = await UserSchema.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Error2' });

    const matchPassword = await user.verifyPassword(req.body.password);

    if (!matchPassword) return res.status(400).json({ message: 'Error3' });

    try {
      const accessToken = jwt.sign({ id: user._id }, config.jwtPassSec!, {
        // expiresIn: 86400, // 24 hours
        expiresIn: '8h',
      });

      const { password, ...others } = user._doc;

      res.header('Access-Control-Allow-Origin', '*');

      res.status(200).json({ ...others, accessToken });
    } catch (err) {
      console.log('Error in logIn Controller: ', { err });
      res.status(500).json({ err });
      next();
    }
  }

  public async sigUp(req: Request, res: Response) {}
}

export const authController = new AuthControlador();
