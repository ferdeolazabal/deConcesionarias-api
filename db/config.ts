import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

import { PropertyValue } from "../models/PropertyValue";
import { PropertyCategory } from "../models/PropertyCategory";
import { Vehicle } from "../models/Vehicle";
import { VehicleProperty } from "../models/VehicleProperty";

export let sequelizeConnection: Sequelize;

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;
const DATABASE_URL = process.env.DATABASE_URL as string;

if (process.env.NODE_ENV === "development") {
  console.log({ dbName, dbUser });

  sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "postgres",
    logging: false,
    native: false,
    models: [PropertyValue, PropertyCategory, Vehicle, VehicleProperty],
  });
}

if (process.env.NODE_ENV === "production") {
  console.log("DATABASE_URL: ", `${DATABASE_URL}`);
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL must be set");
  }
  if (DATABASE_URL) {
    console.log("DATABASE_URL: ", DATABASE_URL);
    sequelizeConnection = new Sequelize(DATABASE_URL, {
      dialect: "postgres",
      logging: false,
      native: false,
      models: [PropertyValue, PropertyCategory, Vehicle, VehicleProperty],
      dialectOptions: { ssl: { rejectUnauthorized: false } },
    });
  }
}
