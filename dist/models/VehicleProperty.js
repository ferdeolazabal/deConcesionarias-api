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
exports.VehicleProperty = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
const PropertyCategory_1 = require("./PropertyCategory");
const PropertyValue_1 = require("./PropertyValue");
let VehicleProperty = class VehicleProperty extends BaseModel_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], VehicleProperty.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => PropertyCategory_1.PropertyCategory),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], VehicleProperty.prototype, "property_category_FK", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => PropertyValue_1.PropertyValue),
    __metadata("design:type", PropertyValue_1.PropertyValue)
], VehicleProperty.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => PropertyCategory_1.PropertyCategory, { onDelete: "RESTRICT" }),
    __metadata("design:type", PropertyCategory_1.PropertyCategory)
], VehicleProperty.prototype, "property_category", void 0);
VehicleProperty = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'vehicle_properties' })
], VehicleProperty);
exports.VehicleProperty = VehicleProperty;
//# sourceMappingURL=VehicleProperty.js.map