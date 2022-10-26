import express from "express";
import {
  addFraudCase,
  getAllFraudCases,
  getOneFraudCase,
} from "../controllers/fraud-cases.controller";

const router = express.Router();

router.post("/get-one", getOneFraudCase);
router.post("/get-all", getAllFraudCases);
router.post("/add", addFraudCase);

export const FraudCasesRouter = router;
