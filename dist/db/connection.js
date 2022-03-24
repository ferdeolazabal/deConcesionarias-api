"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
exports.sequelizeConnection = new sequelize_typescript_1.Sequelize(dbName, dbUser, dbPassword, {
    // const db = new Sequelize('deconcesionarias', 'postgres', '12345', {
    host: dbHost,
    dialect: 'postgres',
    logging: false,
    // models: [Vehicle]
    models: [__dirname + '/../models/*.ts'],
});
// export class Models {
//         public sequelize: Sequelize
//         constructor(config: any) {
//             this.sequelize = new Sequelize(config)
//         }
//         public initModels() {
//             this.sequelize.addModels(this.getModels())
//             return this.sequelize.sync({
//             force: process.env.NODE_ENV === "test",
//             alter: false && process.env.NODE_ENV === "development",
//             })
//         }
//         private getModels() {
//             return [ Vehicle, VehicleProperty, PropertyValue, PropertyCategory]
//         }
// }
//# sourceMappingURL=connection.js.map