import express from "express";
import {
  addClientInfo,
  deleteOneClientInfo,
  getAllClientInfo,
  getOneClientInfo,
  updateClientInfo,
} from "../controllers/client-info.controller";

const router = express.Router();

router.post("/add", addClientInfo);
router.post("/get-all", getAllClientInfo);
router.post("/get-one", getOneClientInfo);
router.post("/update", updateClientInfo);
router.post("/delete", deleteOneClientInfo);

export const ClientInfoRouter = router;
