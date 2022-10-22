import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import { ChannelRouter } from "./channel.route";
import TestRoute from "./test.route";
import { TransactionRoute } from "./transaction.route";
const router = express.Router();

/**
 * Add all routes below
 * For example, below
 */
router.use("/", authMiddleware, TestRoute);
router.use("/channels", authMiddleware, ChannelRouter);
router.use("/transactions", authMiddleware, TransactionRoute);

export default router;
