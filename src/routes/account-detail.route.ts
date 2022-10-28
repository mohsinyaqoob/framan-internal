import express from "express";
import {
  addAccountDetail,
  deleteAccountDetail,
  updateAccountDetail,
} from "../controllers/account-detail.controller";

const router = express.Router();

router.post("/add", addAccountDetail);
router.post("/update", updateAccountDetail);
router.post("/delete", deleteAccountDetail);

export const AccountDetailRouter = router;
