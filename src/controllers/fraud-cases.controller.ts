import { Response, Request } from "express";
import { getAllFraudCases } from "../models/fraud-case.model";

export const getFraudCases = async (req: Request, res: Response) => {
  try {
    const { banksCaseSerialNumber, SAMACaseSerialNumber } = req.body;
    if (!banksCaseSerialNumber || !SAMACaseSerialNumber) {
      return res.status(401).json({
        status: 1,
        data: {
          message:
            "Please provide a valid banksCaseSerialNumber and SAMACaseSerialNumber",
        },
      });
    }
    const fraudCases = await getAllFraudCases(
      banksCaseSerialNumber,
      SAMACaseSerialNumber
    );
    res.status(200).json({
      status: 0,
      data: { count: fraudCases.length, fraudCases },
    });
  } catch (error) {
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
