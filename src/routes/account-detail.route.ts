import express from "express";
import {
  addAccountDetail,
  updateAccountDetail,
} from "../controllers/account-detail.controller";

const router = express.Router();

router.post("/add", addAccountDetail);
router.post("/update", updateAccountDetail);

export const AccountDetailRouter = router;
