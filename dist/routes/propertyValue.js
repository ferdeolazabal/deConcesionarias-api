"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PropertyValue_1 = require("../controllers/PropertyValue");
const router = (0, express_1.Router)();
router.get('/', PropertyValue_1.getPropertyValues);
router.get('/:id', PropertyValue_1.getPropertyValueById);
router.post('/', PropertyValue_1.postPropertyValue);
router.put('/:id', PropertyValue_1.updatePropertyValue);
router.delete('/:id', PropertyValue_1.deletePropertyValue);
module.exports = router;
//# sourceMappingURL=propertyValue.js.map