import sql from "mssql";

export const getAllFraudCases = async (bankCaseSerial, SAMACaseSerial) => {
  try {
    let result = await sql.query(
      `EXEC uspFraudCase_CRUD @Action='SELECT', @BanksCaseSerialNumber='${bankCaseSerial}', @SAMACaseSerialNumber='${SAMACaseSerial}'`
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
