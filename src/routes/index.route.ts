import express from "express";
import TestRoute from "./test.route";
const router = express.Router();

/**
 * Add all routes below
 * For example, below
 */
router.use("/ping", TestRoute);
router.use("/some-another-route", () => {});

export default router;
