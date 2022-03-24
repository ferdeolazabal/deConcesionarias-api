import { Router } from 'express';
import { 
        getPropertyCategory, 
        getPropertyCategories, 
        postPropertyCategory, 
        updatePropertyCategory, 
        deletePropertyCategory 
        } from '../controllers/PropertyCategory';

const router = Router();

router.get('/',       getPropertyCategories);
router.get('/:id',    getPropertyCategory);
router.post('/',      postPropertyCategory);
router.put('/:id',    updatePropertyCategory);
router.delete('/:id', deletePropertyCategory);

module.exports = router;