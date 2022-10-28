import { getAll } from "../models/nationality.model";
import { getAll as getAllClientAccountTypes } from "../models/client-account-type.model";
import { getAll as getAllAccountOpeningMechanisms } from "../models/account-opening-mechanism.model";

export const getAllNationalities = async (req, res) => {
  try {
    const nationalities = await getAll();
    res.status(200).json({ status: 0, data: { nationalities } });
  } catch (error) {
    res.status(200).json({ status: 1, data: { message: error.message } });
  }
};

export const getClientAccountTypes = async (req, res) => {
  try {
    const clientAccountTypes = await getAllClientAccountTypes();
    res.status(200).json({ status: 0, data: { clientAccountTypes } });
  } catch (error) {
    res.status(200).json({ status: 1, data: { message: error.message } });
  }
};

export const getAccountOpeningMechanisms = async (req, res) => {
  try {
    const accountOpeningMechanisms = await getAllAccountOpeningMechanisms();
    res.status(200).json({ status: 0, data: { accountOpeningMechanisms } });
  } catch (error) {
    res.status(200).json({ status: 1, data: { message: error.message } });
  }
};
