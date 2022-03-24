"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PropertyCategory_1 = require("../models/PropertyCategory");
const PropertyValue_1 = require("../models/PropertyValue");
const Vehicle_1 = require("../models/Vehicle");
const VehicleProperty_1 = require("../models/VehicleProperty");
const isDev = process.env.NODE_ENV === 'development';
PropertyValue_1.PropertyValue.sync({ force: isDev });
PropertyCategory_1.PropertyCategory.sync({ force: isDev });
Vehicle_1.Vehicle.sync({ force: isDev });
VehicleProperty_1.VehicleProperty.sync({ force: isDev });
const dbInit = () => {
};
exports.default = dbInit;
//# sourceMappingURL=init.js.map