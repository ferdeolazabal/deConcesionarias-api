"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Vehicle_1 = require("../controllers/Vehicle");
const router = (0, express_1.Router)();
router.get('/', Vehicle_1.getVehicles);
router.get('/:id', Vehicle_1.getVehicle);
router.post('/', Vehicle_1.postVehicle);
router.put('/:id', Vehicle_1.putVehicle);
router.delete('/:id', Vehicle_1.deleteVehicle);
module.exports = router;
//# sourceMappingURL=vehicle.js.map