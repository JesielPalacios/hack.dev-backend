import express, { NextFunction, Request, Response } from 'express';
import { authController } from '../controllers/auth.controller';

const router = express.Router();

// Login endpoint
router.post('/login', authController.sigIn);

// Register endpoint
router.post('/register', authController.sigUp);

export default router;
