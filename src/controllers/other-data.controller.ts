import { getAll } from "../models/nationality.model";

export const getAllNationalities = async (req, res) => {
  try {
    const nationalities = await getAll();
    res.status(200).json({ status: 0, data: { nationalities } });
  } catch (error) {
    res.status(200).json({ status: 1, data: { message: error.message } });
  }
};
