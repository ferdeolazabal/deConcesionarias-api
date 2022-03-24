import { AllowNull, Column, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './BaseModel';
import { PropertyValue } from './PropertyValue';


@Table({tableName: "vehicles"})
export class Vehicle extends BaseModel {
    
    @AllowNull(false)
    @Column
    brand!: string;
    
    @Column
    model!: string;

    @Column
    year!: string;
    
    @HasMany(() => PropertyValue)
    properties!:PropertyValue[];
    
}