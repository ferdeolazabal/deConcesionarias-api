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
exports.deletePropertyCategory = exports.updatePropertyCategory = exports.postPropertyCategory = exports.getPropertyCategory = exports.getPropertyCategories = void 0;
// import { initialization } from "../dbExample/propertyCategory";
const PropertyCategory_1 = require("../models/PropertyCategory");
const getPropertyCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyCategories = yield PropertyCategory_1.PropertyCategory.findAll();
        const count = yield PropertyCategory_1.PropertyCategory.count();
        res.json({
            ok: true,
            msg: 'Categorias recibidas correctamente',
            count,
            propertyCategories
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener categorias"
        });
    }
    ;
});
exports.getPropertyCategories = getPropertyCategories;
const getPropertyCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const propertyCategory = yield PropertyCategory_1.PropertyCategory.findByPk(id);
        res.json({
            ok: true,
            msg: `Categoria con id ${id} recibida correctamente`,
            propertyCategory
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener categoria"
        });
    }
    ;
});
exports.getPropertyCategory = getPropertyCategory;
const postPropertyCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const propertyCategory = yield PropertyCategory_1.PropertyCategory.create(body);
        res.status(201).json({
            ok: true,
            msg: 'Categoria creada correctamente',
            propertyCategory
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear categoria"
        });
    }
    ;
});
exports.postPropertyCategory = postPropertyCategory;
const updatePropertyCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const propertyCategory = yield PropertyCategory_1.PropertyCategory.update(body, { where: { id } });
        res.json({
            ok: true,
            msg: 'Categoria actualizada correctamente',
            propertyCategory
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar categoria"
        });
    }
    ;
});
exports.updatePropertyCategory = updatePropertyCategory;
const deletePropertyCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const propertyCategory = yield PropertyCategory_1.PropertyCategory.destroy({ where: { id } });
        res.json({
            ok: true,
            msg: 'Categoria eliminada correctamente',
            propertyCategory
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar categoria"
        });
    }
    ;
});
exports.deletePropertyCategory = deletePropertyCategory;
//# sourceMappingURL=PropertyCategory.js.map