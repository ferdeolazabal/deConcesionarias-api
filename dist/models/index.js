"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = exports.Models = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_typescript_1.Sequelize; } });
const PropertyCategory_1 = require("./PropertyCategory");
const PropertyValue_1 = require("./PropertyValue");
const Vehicle_1 = require("./Vehicle");
const VehicleProperty_1 = require("./VehicleProperty");
class Models {
    constructor(config) {
        this.sequelize = new sequelize_typescript_1.Sequelize(config);
    }
    initModels() {
        this.sequelize.addModels(this.getModels());
        return this.sequelize.sync({
            force: process.env.NODE_ENV === "test",
            alter: false && process.env.NODE_ENV === "development",
        });
    }
    getModels() {
        return [Vehicle_1.Vehicle, VehicleProperty_1.VehicleProperty, PropertyValue_1.PropertyValue, PropertyCategory_1.PropertyCategory];
    }
}
exports.Models = Models;
//# sourceMappingURL=index.js.map