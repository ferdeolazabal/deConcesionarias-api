import { Request, Response } from "express";
import { PropertyValue } from "../models/PropertyValue";
import { Vehicle } from "../models/Vehicle";


export const getVehicles = async (req: Request, res: Response) => {

    try {
        // const vehicles = await Vehicle.findAll();
        // incluir tabla de propiedades
        const vehicles = await Vehicle.findAll({
            
            include: [{ model: PropertyValue }],
            
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
        const count = await Vehicle.count();
        
        res.json({
            ok: true,
            msg: 'Vehiculos recibidos correctamente',
            count: count,
            vehicles
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener vehiculos"
        });
        
    };
};

export const getVehicle = async (req: Request, res: Response) => {

    try {
    
        const { id } = req.params;
        const vehicle = await Vehicle.findByPk(id, {
            include: [{ model: PropertyValue }]
        });

        res.json({
            ok: true,
            msg: `Vehiculo con id ${ id } recibido correctamente`,
            vehicle
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener vehiculo"
        });
    };
};

export const postVehicle = async (req: Request, res: Response) => {

    try {
    
        const { body } = req;
        const vehicle = await Vehicle.create(body);

        res.status(201).json({
            ok: true,
            msg:'Vehiculo creado correctamente',
            vehicle
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear vehiculo"
        });
    };
};

export const putVehicle = async (req: Request, res: Response) => {
    
    try {
        const { id } = req.params;
        const { body } = req;

        const vehicle = await Vehicle.findByPk(id);

        if(!vehicle){
            res.status(404).json({
                ok: false,
                msg: 'No existe vehiculo con ese id'
            });
            return;
        }

        await vehicle.update(body);

        res.json({
            ok: true,
            msg: 'Vehiculo actualizado correctamente',
            vehicle
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar vehiculo"
        });
    };
};

export const deleteVehicle = async (req: Request, res: Response) => {
    
    try {
        
        const { id } = req.params;
        const vehicle = await Vehicle.findByPk(id);

        if( !vehicle) {
            return res.status(400).json({
                ok: false,
                message: `No existe el vehiculo con id ${id}`
            })
        };

        await vehicle.destroy();

        res.json({
            ok: true,
            msg: `Vehiculo con id ${id} eliminado`,
            vehicle
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar vehiculo"
        });
    };
};