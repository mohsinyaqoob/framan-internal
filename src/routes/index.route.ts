import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import { ChannelRouter } from "./channel.route";
import TestRoute from "./test.route";
const router = express.Router();

/**
 * Add all routes below
 * For example, below
 */
router.use("/", authMiddleware, TestRoute);
router.use("/channels", authMiddleware, ChannelRouter);

export default router;
