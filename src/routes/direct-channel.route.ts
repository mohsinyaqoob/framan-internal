import express from "express";
import {
  addOneDirectChannel,
  getAllDirectChannels,
  getDirectChannels,
  getOneDirectChannel,
  updateOneDirectChannel,
} from "../controllers/direct-channel.controller";

const router = express.Router();

// router.post("/get-all", getDirectChannels);
router.post("/add", addOneDirectChannel);
router.post("/update", updateOneDirectChannel);
router.post("/get-one", getOneDirectChannel);
router.post("/get-all", getAllDirectChannels);

export const DirectChannelRouter = router;
