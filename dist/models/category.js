"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
;
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    icon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize: connection_1.db,
    paranoid: true
});
exports.default = Category;
//# sourceMappingURL=category.js.map