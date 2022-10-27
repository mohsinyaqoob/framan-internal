import express from "express";
import {
  addClientInfo,
  getAllClientInfo,
  getOneClientInfo,
  updateClientInfo,
} from "../controllers/client-info.controller";

const router = express.Router();

router.post("/add", addClientInfo);
router.post("/get-all", getAllClientInfo);
router.post("/get-one", getOneClientInfo);
router.post("/update", updateClientInfo);
router.post("/delete", updateClientInfo);

export const ClientInfoRouter = router;
