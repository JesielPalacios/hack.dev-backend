import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

const connectToDatabase = async () => {
  try {
    const db = await mongoose.connect(config.mongoDBUri!);
    console.log('[database 🍫]: Database is connected to', db.connection.name);
  } catch (err: any) {
    console.error(err.message);
  }
};

connectToDatabase();
