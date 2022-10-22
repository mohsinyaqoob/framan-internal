import { Response, Request } from "express";
import { getDirectChannelById } from "../models/direct-channel.model";
import { getTransactionTypeByDirectChannelId } from "../models/transactions.model";

export const getTransactionTypes = async (req: Request, res: Response) => {
  try {
    const { directChannelId } = req.body;
    if (!directChannelId) {
      res.status(500).json({
        status: 1,
        data: { message: "Please provide directChannelID" },
      });
    }

    const directChannel = await getDirectChannelById(directChannelId);
    if (!directChannel.length) {
      return res.status(500).json({
        status: 1,
        data: {
          message: "Invalid directChannelId provided",
        },
      });
    }

    const transactionTypes = await getTransactionTypeByDirectChannelId(
      directChannelId
    );

    res.status(200).json({
      status: 0,
      data: { count: transactionTypes.length, transactionTypes },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
