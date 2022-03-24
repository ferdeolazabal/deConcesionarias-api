import { Request, Response } from "express";
import { PropertyValue } from "../models/PropertyValue";


export const getPropertyValues = async (req: Request, res: Response) => {

    try {

        const getPropertyValue = await PropertyValue.findAll();
        const count = await PropertyValue.count();

        res.json({
            ok: true,
            msg: 'Valores recibidos correctamente',
            count: count,
            getPropertyValue
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener valores'
        });
    };
};

export const getPropertyValueById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const getpropertyValue = await PropertyValue.findByPk(id);

        res.json({
            ok: true,
            msg:`Valor con id ${ id } recibido correctamente`,
            getpropertyValue, id
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener valor'
        });
    };
};

export const postPropertyValue = async (req: Request, res: Response) => {

    try {

        const { body } = req;
        const postPropertyValue = await PropertyValue.create(body);

        res.status(201).json({
            ok: true,
            msg:'Valores creados correctamente',
            postPropertyValue
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear valor'
        });
    };
};

export const updatePropertyValue = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const { body } = req;
        const putpropertyValue = await PropertyValue.findByPk(id);

        if (putpropertyValue) {
            await putpropertyValue.update(body);
            res.json({
                ok: true,
                msg: `Valor con id ${ id } actualizado correctamente`,
                putpropertyValue
            });
        } else {
            res.status(404).json({
                ok: false,
                msg: `Valor con id ${ id } no encontrado`
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar valor'
        });
    };
};

export const deletePropertyValue = async (req: Request, res: Response) => {
    
    try {

        const { id } = req.params;
        const deletePropertyValue = await PropertyValue.findByPk(id);

        if (deletePropertyValue) {
            await deletePropertyValue.destroy();
            res.json({
                ok: true,
                msg: `Valor con id ${ id } eliminado correctamente`
            });
        } else {
            res.status(404).json({
                ok: false,
                msg: `Valor con id ${ id } no encontrado`
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al eliminar valor'
        });
    };
};