import mongoose, { model, Schema } from 'mongoose';
import { decryptPassword, encryptPassword } from '../utils/helpers';

export class User {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}
}

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  verifyPassword(encryptedPassword: string): Promise<boolean>;
  _doc: any;
}

const userSchema: Schema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.verifyPassword = async function (
  password: string
): Promise<boolean> {
  const user = this;
  return password === decryptPassword(user.password);
};

// Middleware pre-save
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  user.password = encryptPassword(user.password);
  next();
});

export default model<IUser>('User', userSchema);
