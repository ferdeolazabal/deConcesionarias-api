"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
;
class Property extends sequelize_1.Model {
}
Property.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Category",
            key: "id"
        }
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: connection_1.db,
    paranoid: true
});
exports.default = Property;
//# sourceMappingURL=property.js.map