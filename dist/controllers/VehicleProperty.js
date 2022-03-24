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
exports.deleteVehicleProperty = exports.updateVehicleProperty = exports.postVehicleProperty = exports.getVehiclePropertiesByCategoryId = exports.getVehicleProperty = exports.getVehicleProperties = void 0;
const PropertyCategory_1 = require("../models/PropertyCategory");
const VehicleProperty_1 = require("../models/VehicleProperty");
const getVehicleProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getVehicleProperty = yield VehicleProperty_1.VehicleProperty.findAll();
        const count = yield VehicleProperty_1.VehicleProperty.count();
        res.json({
            ok: true,
            msg: "Propiedades recibidas correctamente",
            count,
            getVehicleProperty
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener propiedades"
        });
    }
    ;
});
exports.getVehicleProperties = getVehicleProperties;
const getVehicleProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const getVehicleProperty = yield VehicleProperty_1.VehicleProperty.findByPk(id);
        res.json({
            ok: true,
            msg: `Propiedad con id ${id} recibida correctamente`,
            getVehicleProperty
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error al obtener propiedad con ese id`
        });
    }
    ;
});
exports.getVehicleProperty = getVehicleProperty;
const getVehiclePropertiesByCategoryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const getVehiclePropertiesByCategoryId = yield VehicleProperty_1.VehicleProperty.findAll({
            where: { property_category_FK: id }
        });
        if (getVehiclePropertiesByCategoryId.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: `No existen propiedades para esa categoria`
            });
        }
        const propertyCategory = yield PropertyCategory_1.PropertyCategory.findByPk(id);
        const count = yield VehicleProperty_1.VehicleProperty.count({
            where: { property_category_FK: id }
        });
        if (propertyCategory) {
            res.json({
                ok: true,
                msg: `propiedades para categoria ${propertyCategory.name} con id ${id} `,
                count,
                getVehiclePropertiesByCategoryId
            });
        }
        else {
            res.status(404).json({
                ok: false,
                msg: `No existe categoria con ese id`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error al obtener propiedades con esa categoria`
        });
    }
    ;
});
exports.getVehiclePropertiesByCategoryId = getVehiclePropertiesByCategoryId;
const postVehicleProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const postVehicleProperty = yield VehicleProperty_1.VehicleProperty.create(body);
        res.status(201).json({
            ok: true,
            msg: "Propiedad creada correctamente",
            postVehicleProperty
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear propiedad"
        });
    }
    ;
});
exports.postVehicleProperty = postVehicleProperty;
const updateVehicleProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const updateVehicleProperty = yield VehicleProperty_1.VehicleProperty.update(body, {
            where: { id }
        });
        res.json({
            ok: true,
            msg: "Propiedad actualizada correctamente",
            updateVehicleProperty
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar propiedad"
        });
    }
    ;
});
exports.updateVehicleProperty = updateVehicleProperty;
const deleteVehicleProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteVehicleProperty = yield VehicleProperty_1.VehicleProperty.destroy({
            where: { id }
        });
        res.json({
            ok: true,
            msg: `Propiedad con id ${id} eliminada correctamente`,
            deleteVehicleProperty
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar propiedad"
        });
    }
    ;
});
exports.deleteVehicleProperty = deleteVehicleProperty;
//# sourceMappingURL=VehicleProperty.js.map