import express from "express";
import TestRoute from "./test.route";
const router = express.Router();

/**
 * Add all routes below
 * For example, below
 */
router.use("/ping", TestRoute);

router.use("/some-another-route", (req, res) => {
  res.json({ message: "Some route" });
});

export default router;
