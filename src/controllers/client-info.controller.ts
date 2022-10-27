import { addOne, getAll } from "../models/client-info.model";
import { isValidAddClientInfoRequest } from "../utils/validate.util";

export const addClientInfo = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidAddClientInfoRequest(data);
    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const added = await addOne(data);
    const clientInfo = added[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (clientInfo.ActionStatus !== "Inserted") {
      return res.status(400).json({
        status: 1,
        data: {
          message: clientInfo.ActionMessage,
        },
      });
    }

    res.status(200).json({
      status: 0,
      data: {
        message: clientInfo.ActionMessage,
        clientInfo,
      },
    });
  } catch (error) {
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const getAllClientInfo = async (req, res) => {
  try {
    const clientInfo = await getAll();
    res.status(200).json({
      status: 0,
      data: { count: clientInfo.length, clientInfo },
    });
  } catch (error) {
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
