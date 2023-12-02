import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../utils/config';
import UserSchema from '../models/user.model';

async function sigIn(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  if (!email || !req.body.password) {
    return res.status(400).json({ message: 'Error' });
  }

  const user = await UserSchema.findOne({ email });
  // const user = await UserSchema.findOne({ email }).populate('roles')

  if (!user) return res.status(400).json({ message: 'Error' });

  const matchPassword = await UserSchema.verifyPassword(req.body.password);

  if (!matchPassword) return res.status(400).json({ message: 'Error' });

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
    res.status(500).json({ ...err });
    next();
  }
}

async function sigUp(req: Request, res: Response) {}

export default {
  sigIn,
  sigUp,
};
