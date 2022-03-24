import { Router } from 'express';
import {
    getPropertyValues, 
    getPropertyValueById,
    postPropertyValue, 
    updatePropertyValue,
    deletePropertyValue, 
        } from '../controllers/PropertyValue';

const router = Router();

router.get('/',       getPropertyValues);
router.get('/:id',    getPropertyValueById);
router.post('/',      postPropertyValue);
router.put('/:id',    updatePropertyValue);
router.delete('/:id', deletePropertyValue);

module.exports = router;