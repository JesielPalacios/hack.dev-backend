import mongoose, { model, Schema } from 'mongoose';
import { decryptPassword, encryptPassword } from '../utils/helpers';

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  firstName: string;
  firstSurname: string;
  gender: string;
  preferences: [];
  secondName?: string;
  secondSurname?: string;
  cellPhoneNumber?: string;
  tokenAuth?: string;
  codeAuth?: string;
  verifyPassword(encryptedPassword: string): Promise<boolean>;
  decryptPassword(password: string): Promise<string>;
}

const userSchema = new Schema<IUser>(
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
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 80,
      trim: true,
    },
    secondName: {
      type: String,
      min: 3,
      max: 80,
      trim: true,
    },
    firstSurname: {
      type: String,
      required: true,
      min: 3,
      max: 80,
      trim: true,
    },
    secondSurname: {
      type: String,
      min: 3,
      max: 80,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      default: 'Masculino',
      enum: ['Masculino', 'Femenino'],
    },
    typeCitizenshipNumberId: {
      type: String,
      required: true,
      default: 'Cédula de ciudadanía',
      enum: [
        'Cédula de ciudadanía',
        'Tarjeta de identidad',
        'Cédula de extranjería',
        'Visa',
        'Pasaporte',
        'Registro Civil',
      ],
    },
    citizenshipNumberId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    cellPhoneNumber: {
      type: String,
      max: 20,
      trim: true,
    },
    address: {
      type: String,
      min: 6,
      max: 100,
      trim: true,
    },
    birthDate: {
      type: Date,
      required: true,
      trim: true,
    },
    birthCountry: {
      type: String,
      required: true,
      max: 65,
      trim: true,
    },
    birthDepartment: {
      type: String,
      required: true,
      max: 65,
      trim: true,
    },
    birthCity: {
      type: String,
      required: true,
      max: 65,
      trim: true,
    },
    imageUrl: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
    tokenAuth: {
      type: String,
    },
    codeAuth: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (
  password: string
): Promise<string> => {
  return encryptPassword(password);
};

userSchema.statics.verifyPassword = async function (
  encryptedPassword: string
): Promise<boolean> {
  const user = this;
  return decryptPassword(encryptedPassword) === decryptPassword(user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  user.password = encryptPassword(user.password);
  next();
});

export default model<IUser>('User', userSchema);
