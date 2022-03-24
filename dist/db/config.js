"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const PropertyValue_1 = require("../models/PropertyValue");
const PropertyCategory_1 = require("../models/PropertyCategory");
const Vehicle_1 = require("../models/Vehicle");
const VehicleProperty_1 = require("../models/VehicleProperty");
dotenv_1.default.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
exports.sequelizeConnection = new sequelize_typescript_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    logging: false,
    models: [PropertyValue_1.PropertyValue, PropertyCategory_1.PropertyCategory, Vehicle_1.Vehicle, VehicleProperty_1.VehicleProperty]
});
//# sourceMappingURL=config.js.map