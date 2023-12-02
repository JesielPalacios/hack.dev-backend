import express, { NextFunction, Request, Response } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';

const router = express.Router();

// endpoints
router.use('/auth', authRoutes);
router.use('/', userRoutes);

export default router;
