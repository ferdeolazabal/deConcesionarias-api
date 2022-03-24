"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("../db/config");
const PropertyCategory_1 = require("./PropertyCategory");
const VehicleProperty_1 = require("./VehicleProperty");
const propertyCategory_1 = require("../dbExample/propertyCategory");
const vehicleProperty_1 = require("../dbExample/vehicleProperty");
class Server {
    constructor() {
        this.apiPaths = {
            Vehicles: '/api/vehicles',
            VehicleProperty: '/api/vehicleProperty',
            PropertyCategories: '/api/propertyCategories',
            PropertyValues: '/api/propertyValues'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    ;
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.sequelizeConnection.authenticate();
                yield config_1.sequelizeConnection.sync({ force: true });
                (yield PropertyCategory_1.PropertyCategory.bulkCreate(propertyCategory_1.initialCategories))
                    ? console.log("|---PropertyCategory---| Created")
                    : console.log("|---PropertyCategory---| Not created");
                (yield VehicleProperty_1.VehicleProperty.bulkCreate(vehicleProperty_1.initialProperties))
                    ? console.log("|----VehicleProperty---| Created")
                    : console.log("|----VehicleProperty---| Not created");
                console.log('Connection has been established successfully!');
            }
            catch (error) {
                console.log('Unable to connect to the database:', error);
            }
            ;
        });
    }
    ;
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static('public'));
    }
    ;
    routes() {
        this.app.use(this.apiPaths.Vehicles, require('../routes/vehicle'));
        this.app.use(this.apiPaths.VehicleProperty, require('../routes/vehicleProperty'));
        this.app.use(this.apiPaths.PropertyCategories, require('../routes/propertyCategory'));
        this.app.use(this.apiPaths.PropertyValues, require('../routes/propertyValue'));
    }
    ;
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port http://localhost:${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=Server.js.map