import { Response, Request } from "express";
import { getOne, getAll, addOne } from "../models/fraud-case.model";
import { isValidAddFraudRequest } from "../utils/validate.util";

export const getOneFraudCase = async (req: Request, res: Response) => {
  try {
    const { banksCaseSerialNumber, samaCaseSerialNumber } = req.body;
    if (!banksCaseSerialNumber || !samaCaseSerialNumber) {
      return res.status(400).json({
        status: 1,
        data: {
          message:
            "Please provide a valid banksCaseSerialNumber and samaCaseSerialNumber",
        },
      });
    }
    const fraudCase = await getOne(banksCaseSerialNumber, samaCaseSerialNumber);
    res.status(200).json({
      status: 0,
      data: { count: fraudCase.length, fraudCase },
    });
  } catch (error) {
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const getAllFraudCases = async (req, res) => {
  try {
    const fraudCases = await getAll();
    res.status(200).json({
      status: 0,
      data: { count: fraudCases.length, fraudCases },
    });
  } catch (error) {
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const addFraudCase = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidAddFraudRequest(data);
    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const inserted: any = await addOne(data);
    const fraudCase = inserted[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (fraudCase.ActionStatus !== "Inserted") {
      return res.status(400).json({
        status: 1,
        data: {
          message: fraudCase.ActionMessage,
        },
      });
    }

    res.status(200).json({
      status: 0,
      data: {
        message: fraudCase.ActionMessage,
        fraudCase,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
