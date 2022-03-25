import express, { Application } from 'express';
import cors from 'cors'
import morgan from 'morgan'

import { sequelizeConnection } from '../db/config';
import { PropertyCategory }    from './PropertyCategory';
import { VehicleProperty }     from './VehicleProperty';
import { initialCategories }   from '../dbExample/propertyCategory';
import { initialProperties }   from '../dbExample/vehicleProperty';


class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        Vehicles:           '/api/vehicles',
        VehicleProperty:    '/api/vehicleProperty',
        PropertyCategories: '/api/propertyCategories',
        PropertyValues:     '/api/propertyValues'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
        
        this.dbConnection();
        this.middlewares();
        this.routes();
    };

    async dbConnection(){

        try {
            await sequelizeConnection.authenticate();
            await sequelizeConnection.sync({ force: true });
            
            (await PropertyCategory.bulkCreate(initialCategories))
                ? console.log("|---PropertyCategory---| Created")
                : console.log("|---PropertyCategory---| Not created!");
            
            (await VehicleProperty.bulkCreate(initialProperties))
                ? console.log("|----VehicleProperty---| Created")
                : console.log("|----VehicleProperty---| Not created");
            
            console.log('Connection has been established successfully!');

        } catch (error) {
            console.log('Unable to connect to the database:', error);
        };
    };

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.static('public'));
    };

    routes(){
        this.app.use(this.apiPaths.Vehicles,           require('../routes/vehicle') );
        this.app.use(this.apiPaths.VehicleProperty,    require('../routes/vehicleProperty') );
        this.app.use(this.apiPaths.PropertyCategories, require('../routes/propertyCategory') );
        this.app.use(this.apiPaths.PropertyValues,     require('../routes/propertyValue') );
    };

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port http://localhost:${this.port}`)
        })
    };
};

export default Server;