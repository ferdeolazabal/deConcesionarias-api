"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VehicleProperty_1 = require("../controllers/VehicleProperty");
const router = (0, express_1.Router)();
router.get('/', VehicleProperty_1.getVehicleProperties);
router.get('/:id', VehicleProperty_1.getVehicleProperty);
router.get('/category/:id', VehicleProperty_1.getVehiclePropertiesByCategoryId);
router.post('/', VehicleProperty_1.postVehicleProperty);
router.put('/:id', VehicleProperty_1.updateVehicleProperty);
router.delete('/:id', VehicleProperty_1.deleteVehicleProperty);
module.exports = router;
//# sourceMappingURL=vehicleProperty.js.map