import {
  addOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "../models/client-info.model";
import {
  isValidAddClientInfoRequest,
  isValidDeleteOneClientInfoRequest,
  isValidGetOneClientInfoRequest,
  isValidUpdateClientInfoRequest,
} from "../utils/validate.util";

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

export const updateClientInfo = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidUpdateClientInfoRequest(data);
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
    const clientInfo = updated[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (clientInfo.ActionStatus !== "Updated") {
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
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const getOneClientInfo = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidGetOneClientInfoRequest(data);

    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const clientInfo: any = await getOne(data);

    res.status(200).json({
      status: 0,
      data: {
        clientInfo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const deleteOneClientInfo = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidDeleteOneClientInfoRequest(data);

    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const clientInfo: any = await deleteOne(data);

    console.log(clientInfo);

    res.status(200).json({
      status: 0,
      data: {
        clientInfo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
