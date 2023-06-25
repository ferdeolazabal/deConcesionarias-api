import { Router } from "express";
import {
  getVehicles,
  getVehicle,
  postVehicle,
  putVehicle,
  deleteVehicle,
  getVehicleValuesByVehicleId,
} from "../controllers/Vehicle";

const router = Router();

router.get("/", getVehicles);
router.get("/vehicleValues/:id", getVehicleValuesByVehicleId);
router.get("/:id", getVehicle);
router.post("/", postVehicle);
router.put("/:id", putVehicle);
router.delete("/:id", deleteVehicle);

module.exports = router;
