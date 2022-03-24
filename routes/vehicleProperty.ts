import { Router } from 'express';
import { 
        getVehicleProperty, 
        getVehicleProperties, 
        postVehicleProperty, 
        updateVehicleProperty, 
        deleteVehicleProperty, 
        getVehiclePropertiesByCategoryId
        } from '../controllers/VehicleProperty';

const router = Router();

router.get('/',                getVehicleProperties);
router.get('/:id',             getVehicleProperty);
router.get('/category/:id',    getVehiclePropertiesByCategoryId);
router.post('/',               postVehicleProperty);
router.put('/:id',             updateVehicleProperty);
router.delete('/:id',          deleteVehicleProperty);

module.exports = router;