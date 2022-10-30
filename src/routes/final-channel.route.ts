import express from "express";
import {
    addFinalChannel,updateFinalChannel,getFinalChannel,getOneFinalChannel
} from "../controllers/final-channel.controller";

const router = express.Router();

// router.post("/get-all", getDirectChannels);
router.post("/add", addFinalChannel);
router.post("/update", updateFinalChannel);
router.post("/get-all", getFinalChannel);
router.post("/get-one", getOneFinalChannel);





export const FinalChannelRouter = router;
