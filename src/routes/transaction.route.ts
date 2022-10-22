import express from "express";
import { getTransactionTypes } from "../controllers/transaction.controller";
// import { getDirectChannels } from "../controllers/channel.controller";

const router = express.Router();

router.post("/transaction-types", getTransactionTypes);

export const TransactionRouter = router;
