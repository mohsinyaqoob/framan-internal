import express from "express";
import { getDirectChannels } from "../controllers/channel.controller";

const router = express.Router();

router.post("/direct", getDirectChannels);

export const ChannelRouter = router;
