import { Response, Request } from "express";
import {
  addOne,
  getAll,
  getOne,
  updateOne,
  _getAll,
} from "../models/direct-channel.model";
import {
  isValidAddOneDirectChannel,
  isValidGetOneDirectChanel,
  isValidUpdateOneDirectChannel,
} from "../utils/validate.util";

export const getDirectChannels = async (req: Request, res: Response) => {
  try {
    const directChannels = await _getAll();
    res.status(200).json({
      status: 0,
      data: { count: directChannels.length, directChannels },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const addOneDirectChannel = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidAddOneDirectChannel(data);
    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const inserted = await addOne(data);
    const directChannel = inserted[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (directChannel.ActionStatus !== "Inserted") {
      return res.status(400).json({
        status: 1,
        data: {
          message: directChannel.ActionMessage,
        },
      });
    }

    res.status(200).json({
      status: 0,
      data: {
        message: directChannel.ActionMessage,
        directChannel,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const updateOneDirectChannel = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidUpdateOneDirectChannel(data);
    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const updated = await updateOne(data);
    const accountDetail = updated[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (accountDetail.ActionStatus !== "Updated") {
      return res.status(400).json({
        status: 1,
        data: {
          message: accountDetail.ActionMessage,
        },
      });
    }

    res.status(200).json({
      status: 0,
      data: {
        message: accountDetail.ActionMessage,
        accountDetail,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const getOneDirectChannel = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidGetOneDirectChanel(data);
    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const directChannel = await getOne(data);

    res.status(200).json({
      status: 0,
      data: {
        directChannel,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const getAllDirectChannels = async (req, res) => {
  try {
    const directChannels = await getAll();

    res.status(200).json({
      status: 0,
      data: {
        directChannels,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
