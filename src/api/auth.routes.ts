import express, { NextFunction, Request, Response } from 'express';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();

// Login endpoint
router.post('/login', authCtrl.sigIn);

// Register endpoint
router.post('/register', authCtrl.sigUp);

export default router;
