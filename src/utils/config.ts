import 'dotenv/config';

export default {
  client: process.env.CLIENT,

  jwtSecret: process.env.JWT_SEC,
  jwtPassSec: process.env.PASS_SEC,
  jwtSecretReset: process.env.JWT_SEC_RESET,

  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'Jhon',
  ADMIN_SURNAME: process.env.ADMIN_SURNAME || 'Doe',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'jesielvirtualsa@gmail.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin',

  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiScret: process.env.CLOUDINARY_API_SECRET,
  mongoDBUri: process.env.MONGODB_URI,

  gmailHost: process.env.GMAIL_HOST,
  gmailPort: process.env.GMAIL_PORT,
  gmailSecure: process.env.GMAIL_SECURE,
  gmailUser: process.env.GMAIL_USER,
  gmailPassword: process.env.GMAIL_PASSWORD,
};
