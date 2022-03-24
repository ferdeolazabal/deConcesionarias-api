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
exports.deletePropertyValue = exports.updatePropertyValue = exports.postPropertyValue = exports.getPropertyValueById = exports.getPropertyValues = void 0;
const PropertyValue_1 = require("../models/PropertyValue");
const getPropertyValues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getPropertyValue = yield PropertyValue_1.PropertyValue.findAll();
        const count = yield PropertyValue_1.PropertyValue.count();
        res.json({
            ok: true,
            msg: 'Valores recibidos correctamente',
            count: count,
            getPropertyValue
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener valores'
        });
    }
    ;
});
exports.getPropertyValues = getPropertyValues;
const getPropertyValueById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const getpropertyValue = yield PropertyValue_1.PropertyValue.findByPk(id);
        res.json({
            ok: true,
            msg: `Valor con id ${id} recibido correctamente`,
            getpropertyValue, id
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener valor'
        });
    }
    ;
});
exports.getPropertyValueById = getPropertyValueById;
const postPropertyValue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const postPropertyValue = yield PropertyValue_1.PropertyValue.create(body);
        res.status(201).json({
            ok: true,
            msg: 'Valores creados correctamente',
            postPropertyValue
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear valor'
        });
    }
    ;
});
exports.postPropertyValue = postPropertyValue;
const updatePropertyValue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const putpropertyValue = yield PropertyValue_1.PropertyValue.findByPk(id);
        if (putpropertyValue) {
            yield putpropertyValue.update(body);
            res.json({
                ok: true,
                msg: `Valor con id ${id} actualizado correctamente`,
                putpropertyValue
            });
        }
        else {
            res.status(404).json({
                ok: false,
                msg: `Valor con id ${id} no encontrado`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar valor'
        });
    }
    ;
});
exports.updatePropertyValue = updatePropertyValue;
const deletePropertyValue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletePropertyValue = yield PropertyValue_1.PropertyValue.findByPk(id);
        if (deletePropertyValue) {
            yield deletePropertyValue.destroy();
            res.json({
                ok: true,
                msg: `Valor con id ${id} eliminado correctamente`
            });
        }
        else {
            res.status(404).json({
                ok: false,
                msg: `Valor con id ${id} no encontrado`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al eliminar valor'
        });
    }
    ;
});
exports.deletePropertyValue = deletePropertyValue;
//# sourceMappingURL=PropertyValue.js.map