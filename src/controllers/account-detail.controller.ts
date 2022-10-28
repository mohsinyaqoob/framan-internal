import { addOne, updateOne, deleteOne } from "../models/account-detail.model";
import {
  isValidAddOneAccountDetailRequest,
  isValidDeleteAccountDetailRequest,
  isValidUpdateOneAccountDetailRequest,
} from "../utils/validate.util";

export const addAccountDetail = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidAddOneAccountDetailRequest(data);
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
    const accountDetail = added[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (accountDetail.ActionStatus !== "Inserted") {
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
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};

export const updateAccountDetail = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidUpdateOneAccountDetailRequest(data);
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

export const deleteAccountDetail = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidDeleteAccountDetailRequest(data);
    if (!isValid) {
      return res.status(400).json({
        status: 1,
        data: {
          message: "Please provide all required params",
          errors,
        },
      });
    }

    const deletedAccountDetails = await deleteOne(data);

    res.status(200).json({
      status: 0,
      data: {
        deletedAccountDetails,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
