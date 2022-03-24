"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValue = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
const Vehicle_1 = require("./Vehicle");
const VehicleProperty_1 = require("./VehicleProperty");
let PropertyValue = class PropertyValue extends BaseModel_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PropertyValue.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Vehicle_1.Vehicle),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PropertyValue.prototype, "vehicle_FK", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Vehicle_1.Vehicle),
    __metadata("design:type", Vehicle_1.Vehicle)
], PropertyValue.prototype, "vehicle", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => VehicleProperty_1.VehicleProperty),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PropertyValue.prototype, "vehicle_property_FK", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => VehicleProperty_1.VehicleProperty),
    __metadata("design:type", VehicleProperty_1.VehicleProperty)
], PropertyValue.prototype, "vehicle_property", void 0);
PropertyValue = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "property_values" })
], PropertyValue);
exports.PropertyValue = PropertyValue;
//# sourceMappingURL=PropertyValue.js.map