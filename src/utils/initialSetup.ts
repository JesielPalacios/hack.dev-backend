import UserSchema from '../models/user.model';
import config from './config';

export const createAdmin = async () => {
  // check for an existing admin user
  const userFound = await UserSchema.findOne({ email: config.ADMIN_EMAIL });
  // console.log(userFound)
  if (userFound) return;

  // create a new admin user
  const newUser = await UserSchema.create({
    email: config.ADMIN_EMAIL,
    password: config.ADMIN_PASSWORD,
    firstName: config.ADMIN_USERNAME,
    // secondName: 'Admin',
    firstSurname: config.ADMIN_SURNAME,
    // secondSurname: 'Admin',
    gender: 'Masculino',
    typeCitizenshipNumberId: 'Cédula de ciudadanía',
    citizenshipNumberId: '1234567890',
    cellPhoneNumber: '1234567890',
    address: '1234567890',
    birthDate: '1993-7-17',
    birthCountry: 'Colombia',
    birthDepartment: 'Chocó',
    birthCity: 'Quibdó',
  });

  console.log(`new user created: ${newUser.email}`);
};

createAdmin();
