import express from "express";
import { getFraudCases } from "../controllers/fraud-cases.controller";

const router = express.Router();

router.post("/", getFraudCases);

export const FraudCasesRouter = router;
