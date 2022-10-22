import { Response, Request } from "express";
import { getAll } from "../models/direct-channel.model";

export const getDirectChannels = async (req: Request, res: Response) => {
  try {
    const directChannels = await getAll();
    res
      .status(200)
      .json({
        status: 0,
        data: { count: directChannels.length, directChannels },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 1, data: { message: error.message } });
  }
};
