"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PropertyCategory_1 = require("../controllers/PropertyCategory");
const router = (0, express_1.Router)();
router.get('/', PropertyCategory_1.getPropertyCategories);
router.get('/:id', PropertyCategory_1.getPropertyCategory);
router.post('/', PropertyCategory_1.postPropertyCategory);
router.put('/:id', PropertyCategory_1.updatePropertyCategory);
router.delete('/:id', PropertyCategory_1.deletePropertyCategory);
module.exports = router;
//# sourceMappingURL=propertyCategory.js.map