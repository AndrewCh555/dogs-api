import { Dog } from '../models/dog.model';

const dotenv = require('dotenv');
import { cleanEnv, num, str } from 'envalid';
dotenv.config();

const env = cleanEnv(process.env, {
  MYSQL_HOST: str(),
  MYSQL_PORT: num({ default: 3306 }),
  MYSQL_USERNAME: str(),
  MYSQL_PASSWORD: str(),
  MYSQL_DATABASE: str(),
});

export const mysqlConfig = {
  dialect: 'mysql' as const,

  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
};

export const models = [Dog];
