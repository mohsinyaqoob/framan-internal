import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import { ChannelRouter } from "./channel.route";
import { FraudCasesRouter } from "./fraud-cases.route";
import { TransactionRouter } from "./transaction.route";
import TestRoute from "./test.route";

const router = express.Router();

/**
 * Add all routes below
 * For example, below
 */
router.use("/", authMiddleware, TestRoute);
router.use("/channels", authMiddleware, ChannelRouter);
router.use("/transactions", authMiddleware, TransactionRouter);
router.use("/fraud-cases", authMiddleware, FraudCasesRouter);

export default router;
