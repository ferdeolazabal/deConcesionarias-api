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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle = exports.putVehicle = exports.postVehicle = exports.getVehicle = exports.getVehicles = void 0;
const PropertyValue_1 = require("../models/PropertyValue");
const Vehicle_1 = require("../models/Vehicle");
const getVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const vehicles = await Vehicle.findAll();
        // incluir tabla de propiedades
        const vehicles = yield Vehicle_1.Vehicle.findAll({
            include: [{ model: PropertyValue_1.PropertyValue }],
            // include: [{
            //     model: PropertyValue,
            //     as: 'property_values',
            //     attributes: ['id', 'value'],
            //     through: {
            //         attributes: [
            //             'id', 'vehicle_FK', 'vehicle_property_FK', 'value'
            //         ]
            //     }
            // }]
        });
        const count = yield Vehicle_1.Vehicle.count();
        res.json({
            ok: true,
            msg: 'Vehiculos recibidos correctamente',
            count: count,
            vehicles
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener vehiculos"
        });
    }
    ;
});
exports.getVehicles = getVehicles;
const getVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const vehicle = yield Vehicle_1.Vehicle.findByPk(id, {
            include: [{ model: PropertyValue_1.PropertyValue }]
        });
        const count = yield PropertyValue_1.PropertyValue.count({
            where: { vehicle_FK: id }
        });
        res.json({
            ok: true,
            msg: `Vehiculo con id ${id} recibido correctamente`,
            count: `Vehiculo con ${count} propiedades valoradas`,
            vehicle
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener vehiculo"
        });
    }
    ;
});
exports.getVehicle = getVehicle;
const postVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const vehicle = yield Vehicle_1.Vehicle.create(body);
        res.status(201).json({
            ok: true,
            msg: 'Vehiculo creado correctamente',
            vehicle
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear vehiculo"
        });
    }
    ;
});
exports.postVehicle = postVehicle;
const putVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const vehicle = yield Vehicle_1.Vehicle.findByPk(id);
        if (!vehicle) {
            res.status(404).json({
                ok: false,
                msg: 'No existe vehiculo con ese id'
            });
            return;
        }
        yield vehicle.update(body);
        res.json({
            ok: true,
            msg: 'Vehiculo actualizado correctamente',
            vehicle
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar vehiculo"
        });
    }
    ;
});
exports.putVehicle = putVehicle;
const deleteVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const vehicle = yield Vehicle_1.Vehicle.findByPk(id);
        if (!vehicle) {
            return res.status(400).json({
                ok: false,
                message: `No existe el vehiculo con id ${id}`
            });
        }
        ;
        yield vehicle.destroy();
        res.json({
            ok: true,
            msg: `Vehiculo con id ${id} eliminado`,
            vehicle
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar vehiculo"
        });
    }
    ;
});
exports.deleteVehicle = deleteVehicle;
//# sourceMappingURL=Vehicle.js.map