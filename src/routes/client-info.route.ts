import express from "express";
import {
  addClientInfo,
  getAllClientInfo,
  updateClientInfo,
} from "../controllers/client-info.controller";

const router = express.Router();

router.post("/add", addClientInfo);
router.post("/get-all", getAllClientInfo);
router.post("/update", updateClientInfo);

export const ClientInfoRouter = router;
