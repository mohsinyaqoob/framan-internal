import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import { DirectChannelRouter } from "./direct-channel.route";
import { FraudCasesRouter } from "./fraud-cases.route";
import { TransactionRouter } from "./transaction.route";
import TestRoute from "./test.route";
import { ClientInfoRouter } from "./client-info.route";
import { OtherDataRouter } from "./other-data.route";
import { AccountDetailRouter } from "./account-detail.route";

const router = express.Router();

// Form Step 1:
router.use("/", authMiddleware, OtherDataRouter);

router.use("/direct-channel", authMiddleware, DirectChannelRouter);
router.use("/transactions", authMiddleware, TransactionRouter);
router.use("/fraud-cases", authMiddleware, FraudCasesRouter);

// Form Step 2:
router.use("/client-info", authMiddleware, ClientInfoRouter);

// Form Step 3:
router.use("/account-detail", authMiddleware, AccountDetailRouter);

export default router;
