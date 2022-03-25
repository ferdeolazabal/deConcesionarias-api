import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

import { PropertyValue } from '../models/PropertyValue';
import { PropertyCategory } from '../models/PropertyCategory';
import { Vehicle } from '../models/Vehicle';
import { VehicleProperty } from '../models/VehicleProperty';
dotenv.config();

const dbName     = process.env.DB_NAME as string
const dbUser     = process.env.DB_USER as string
const dbPassword = process.env.DB_PASSWORD as string
const dbHost     = process.env.DB_HOST as string

export const sequelizeConnection = new Sequelize( dbName, dbUser , dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    logging: false,
    models: [PropertyValue, PropertyCategory, Vehicle, VehicleProperty],
    // dialectOptions: { ssl: { rejectUnauthorized: false } },
});