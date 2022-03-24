import { Request, Response } from "express";
// import { initialization } from "../dbExample/propertyCategory";
import { PropertyCategory } from "../models/PropertyCategory";


export const getPropertyCategories = async (req: Request, res: Response) => {

    try {

        const propertyCategories = await PropertyCategory.findAll();
        const count = await PropertyCategory.count();

        res.json({
            ok: true,
            msg: 'Categorias recibidas correctamente',
            count,
            propertyCategories
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener categorias"
        });

    };
};

export const getPropertyCategory = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const propertyCategory = await PropertyCategory.findByPk(id);

        res.json({
            ok: true,
            msg:`Categoria con id ${ id } recibida correctamente`,
            propertyCategory
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener categoria"
        });
    };
};

export const postPropertyCategory = async (req: Request, res: Response) => {

    try {

        const { body } = req;
        const propertyCategory = await PropertyCategory.create(body);

        res.status(201).json({
            ok: true,
            msg:'Categoria creada correctamente',
            propertyCategory
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear categoria"
        });
    };
};

export const updatePropertyCategory = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const { body } = req;
        const propertyCategory = await PropertyCategory.update(body, { where: { id } });

        res.json({
            ok: true,
            msg:'Categoria actualizada correctamente',
            propertyCategory
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar categoria"
        });
    };
};

export const deletePropertyCategory = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const propertyCategory = await PropertyCategory.destroy({ where: { id } });

        res.json({
            ok: true,
            msg:'Categoria eliminada correctamente',
            propertyCategory
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar categoria"
        });
    };
};