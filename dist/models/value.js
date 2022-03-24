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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const property_1 = require("./property");
const vehicles_1 = require("./vehicles");
let Value = class Value extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Value.prototype, "brand", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => vehicles_1.Vehicle),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Value.prototype, "vehicle_FK", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => vehicles_1.Vehicle),
    __metadata("design:type", vehicles_1.Vehicle)
], Value.prototype, "vehicle", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => property_1.Property),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Value.prototype, "vehicle_property_FK", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => property_1.Property),
    __metadata("design:type", typeof (_a = typeof property_1.Property !== "undefined" && property_1.Property) === "function" ? _a : Object)
], Value.prototype, "vehicle_property", void 0);
Value = __decorate([
    sequelize_typescript_1.Table
], Value);
exports.Value = Value;
//# sourceMappingURL=value.js.map