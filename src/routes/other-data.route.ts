import express from "express";
import {
  getAccountOpeningMechanisms,
  getAllNationalities,
  getClientAccountTypes,
} from "../controllers/other-data.controller";
const router = express.Router();

router.post("/nationalities", getAllNationalities);
router.post("/client-account-types", getClientAccountTypes);
router.post("/account-opening-mechanisms", getAccountOpeningMechanisms);

export const OtherDataRouter = router;
