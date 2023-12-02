import express from 'express';
import indexRoutes from './api/index.routes';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';
// import { createAdmin } from '../initialSetup';
import fileUpload from 'express-fileupload';

// Initializations
const app = express();
app.use(express.json());

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());
// Note that this option available for versions 1.0.0 and newer.
app.use(
  fileUpload({
    useTempFiles: true,
    // tempFileDir : '/tmp/'
    tempFileDir: 'uploads/',
  })
);

// Routes
app.use('/api', indexRoutes);

// // this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
