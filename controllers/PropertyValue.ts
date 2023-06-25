import { Request, Response } from "express";
import { PropertyValue } from "../models/PropertyValue";
import { Vehicle } from "../models/Vehicle";

export const getPropertyValues = async (req: Request, res: Response) => {
  try {
    const getPropertyValue = await PropertyValue.findAll();
    const count = await PropertyValue.count();

    res.json({
      ok: true,
      msg: "Valores recibidos correctamente",
      count: count,
      getPropertyValue,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al obtener valores",
    });
  }
};

export const getPropertyValueById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getpropertyValue = await PropertyValue.findByPk(id);

    res.json({
      ok: true,
      msg: `Valor con id ${id} recibido correctamente`,
      getpropertyValue,
      id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al obtener valor",
    });
  }
};

export const postPropertyValue = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const postPropertyValue = await PropertyValue.create(body);

    res.status(201).json({
      ok: true,
      msg: "Valores creados correctamente",
      postPropertyValue,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear valor",
    });
  }
};

export const updatePropertyValue = async (req: Request, res: Response) => {
  try {
    const { id: vehicleId } = req.params;
    const { body } = req.body;

    const putpropertyValue = await PropertyValue.findOne({
      where: {
        vehicle_FK: vehicleId,
        vehicle_property_FK: body.propertyCategory_FK,
      },
    });

    if (putpropertyValue) {
      const updatedValue = await putpropertyValue.update({
        value: body.propertyValue,
      });

      res.json({
        ok: true,
        msg: `Categoria ${body.propertyCategory_FK} actualizada correctamente con valor ${body.propertyValue}}`,
        updatedValue,
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: `Categoria ${body.propertyCategory_FK} no encontrada con valor ${body.propertyValue}}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al actualizar valor",
    });
  }
};

export const deletePropertyValue = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletePropertyValue = await PropertyValue.findByPk(id);

    if (deletePropertyValue) {
      await deletePropertyValue.destroy();
      res.json({
        ok: true,
        msg: `Valor con id ${id} eliminado correctamente`,
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: `Valor con id ${id} no encontrado`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al eliminar valor",
    });
  }
};
