"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class Ingredient extends sequelize_1.Model {
}
Ingredient.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: sequelize_1.DataTypes.TEXT
    },
    foodGroup: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize: connection_1.db,
    paranoid: true
});
exports.default = Ingredient;
//# sourceMappingURL=ingredients.js.map