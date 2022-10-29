import express from "express";
import {
  addOneDirectChannel,
  getDirectChannels,
} from "../controllers/channel.controller";

const router = express.Router();

router.post("/get-all", getDirectChannels);
router.post("/add", addOneDirectChannel);

export const DirectChannelRouter = router;
