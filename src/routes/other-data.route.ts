import express from "express";
import {
  getAllNationalities,
  getClientAccountTypes,
} from "../controllers/other-data.controller";
const router = express.Router();

router.post("/nationalities", getAllNationalities);
router.post("/client-account-types", getClientAccountTypes);

export const OtherDataRouter = router;
