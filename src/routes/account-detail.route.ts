import express from "express";
import {
  addAccountDetail,
  deleteAccountDetail,
  getAllAccountDetails,
  getOneAccountDetail,
  updateAccountDetail,
} from "../controllers/account-detail.controller";

const router = express.Router();

router.post("/add", addAccountDetail);
router.post("/update", updateAccountDetail);
router.post("/delete", deleteAccountDetail);
router.post("/get-all", getAllAccountDetails);
router.post("/get-one", getOneAccountDetail);

export const AccountDetailRouter = router;
