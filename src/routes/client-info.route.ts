import express from "express";
import {
  addClientInfo,
  getAllClientInfo,
} from "../controllers/client-info.controller";

const router = express.Router();

router.post("/add", addClientInfo);
router.post("/get-all", getAllClientInfo);

export const ClientInfoRouter = router;
