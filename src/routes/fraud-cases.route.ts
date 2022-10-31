import express from "express";
import {
  addFraudCase,
  deleteFraudCase,
  getAllFraudCases,
  getOneFraudCase,
  searchFraudCases,
  updateFraudCase,
} from "../controllers/fraud-cases.controller";

const router = express.Router();

router.post("/get-one", getOneFraudCase);
router.post("/get-all", getAllFraudCases);
router.post("/add", addFraudCase);
router.post("/update", updateFraudCase);
router.post("/delete", deleteFraudCase);
router.post("/search-fraud-cases", searchFraudCases);

export const FraudCasesRouter = router;
