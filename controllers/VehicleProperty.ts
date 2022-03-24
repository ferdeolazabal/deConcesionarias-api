import { Request, Response } from "express";
import { PropertyCategory } from "../models/PropertyCategory";
import { VehicleProperty } from "../models/VehicleProperty";

export const getVehicleProperties = async (req: Request, res: Response) => {

    try {
        const getVehicleProperty = await VehicleProperty.findAll();
        const count = await VehicleProperty.count();
        
        res.json({
            ok: true,
            msg: "Propiedades recibidas correctamente",
            count,
            getVehicleProperty
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener propiedades"
        });
    };
};

export const getVehicleProperty = async (req: Request, res: Response) => {
    
    try {

        const { id } = req.params;
        const getVehicleProperty = await VehicleProperty.findByPk( id );

        res.json({
            ok: true,
            msg: `Propiedad con id ${ id } recibida correctamente`,
            getVehicleProperty
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error al obtener propiedad con ese id`
        });
    };
};

export const getVehiclePropertiesByCategoryId = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const getVehiclePropertiesByCategoryId = await VehicleProperty.findAll({
            where: { property_category_FK: id }
        });
        
        if( getVehiclePropertiesByCategoryId.length === 0 ) {
            return res.status(404).json({
                ok: false,
                msg: `No existen propiedades para esa categoria`
            });
        }

        const propertyCategory = await PropertyCategory.findByPk(id);
        const count = await VehicleProperty.count({
            where: { property_category_FK: id }
        });

        if (propertyCategory) {
            res.json({
                ok: true,
                msg: `propiedades para categoria ${ propertyCategory.name } con id ${ id } `,
                count,
                getVehiclePropertiesByCategoryId
            });
        } else {
            res.status(404).json({
                ok: false,
                msg: `No existe categoria con ese id`
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error al obtener propiedades con esa categoria`
        });
    };
};

export const postVehicleProperty = async (req: Request, res: Response) => {

    try {

        const { body } = req;
        const postVehicleProperty = await VehicleProperty.create(body);

        res.status(201).json({
            ok: true,
            msg: "Propiedad creada correctamente",
            postVehicleProperty
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear propiedad"
        });
    };
};

export const updateVehicleProperty = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const { body } = req;
        const updateVehicleProperty = await VehicleProperty.update(body, {
            where: { id }
        });

        res.json({
            ok: true,
            msg: "Propiedad actualizada correctamente",
            updateVehicleProperty
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar propiedad"
        });
    };
};

export const deleteVehicleProperty = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const deleteVehicleProperty = await VehicleProperty.destroy({
            where: { id }
        });

        res.json({
            ok: true,
            msg: `Propiedad con id ${ id } eliminada correctamente`,
            deleteVehicleProperty
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar propiedad"
        });
    };
};