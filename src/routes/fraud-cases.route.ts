import express from "express";
import {
  addFraudCase,
  getAllFraudCases,
  getOneFraudCase,
  updateFraudCase,
} from "../controllers/fraud-cases.controller";

const router = express.Router();

router.post("/get-one", getOneFraudCase);
router.post("/get-all", getAllFraudCases);
router.post("/add", addFraudCase);
router.post("/update", updateFraudCase);
router.post("/delete", addFraudCase);

export const FraudCasesRouter = router;
