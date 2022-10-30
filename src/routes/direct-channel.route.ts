import express from "express";
import {
  addOneDirectChannel,
  getDirectChannels,
  updateOneDirectChannel,
} from "../controllers/direct-channel.controller";

const router = express.Router();

// router.post("/get-all", getDirectChannels);
router.post("/add", addOneDirectChannel);
router.post("/update", updateOneDirectChannel);

export const DirectChannelRouter = router;
