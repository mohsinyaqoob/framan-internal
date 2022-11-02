import { Response, Request } from "express";
import {
  addOne,
  updateOne,
  getAll,
  getOne,
} from "../models/final-channel.model";
import {
  isValidAddFinalChannel,
  isValidUpdateFinalChannel,
  isValidGetOneFinalChannel,
} from "../utils/validate.util";

export const addFinalChannel = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidAddFinalChannel(data);
    if (!isValid) {
      return res.status(400).json({
        token: req.body.token,
        userData: {
          status: 1,
          data: {
            message: "Please provide all required params",
            errors,
          },
        },
      });
    }

    const inserted = await addOne(data);
    const finalChannel = inserted[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (finalChannel.ActionStatus !== "Inserted") {
      return res.status(400).json({
        token: req.body.token,
        userData: {
          status: 1,
          data: {
            message: finalChannel.ActionMessage,
          },
        },
      });
    }

    res.status(200).json({
      token: req.body.token,
      userData: {
        status: 0,
        data: {
          message: finalChannel.ActionMessage,
          finalChannel,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      token: req.body.token,
      userData: {
        status: 1,
        data: { message: error.message },
      },
    });
  }
};

export const updateFinalChannel = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidUpdateFinalChannel(data);
    if (!isValid) {
      return res.status(400).json({
        token: req.body.token,
        userData: {
          status: 1,
          data: {
            message: "Please provide all required params",
            errors,
          },
        },
      });
    }

    const updated = await updateOne(data);
    const finalChannel = updated[0];

    // This could be handled in a better way later, maybe
    // String comparison is highly error-prone
    if (finalChannel.ActionStatus !== "Updated") {
      return res.status(400).json({
        token: req.body.token,
        userData: {
          status: 1,
          data: {
            message: finalChannel.ActionMessage,
          },
        },
      });
    }

    res.status(200).json({
      token: req.body.token,
      userData: {
        status: 0,
        data: {
          message: finalChannel.ActionMessage,
          finalChannel,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      token: req.body.token,
      userData: {
        status: 1,
        data: { message: error.message },
      },
    });
  }
};

export const getFinalChannel = async (req, res) => {
  try {
    const FinalChannelDetails = await getAll();

    res.status(200).json({
      token: req.body.token,
      userData: {
        status: 0,
        data: {
          count: FinalChannelDetails.length,
          FinalChannelDetails,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      token: req.body.token,
      userData: {
        status: 1,
        data: { message: error.message },
      },
    });
  }
};

export const getOneFinalChannel = async (req, res) => {
  try {
    const data = req.body;
    const { isValid, errors } = isValidGetOneFinalChannel(data);
    if (!isValid) {
      return res.status(400).json({
        token: req.body.token,
        userData: {
          status: 1,
          data: {
            message: "Please provide all required params",
            errors,
          },
        },
      });
    }

    const finalChannel = await getOne(data);

    res.status(200).json({
      token: req.body.token,
      userData: {
        status: 0,
        data: {
          finalChannel,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      token: req.body.token,
      userData: {
        status: 1,
        data: { message: error.message },
      },
    });
  }
};
