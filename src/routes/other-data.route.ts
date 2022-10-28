import express from "express";
import { getAllNationalities } from "../controllers/other-data.controller";
const router = express.Router();

router.post("/nationalities", getAllNationalities);

export const OtherDataRouter = router;
