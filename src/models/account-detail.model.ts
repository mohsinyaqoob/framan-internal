import sql from "mssql";

export const addOne = async (data) => {
  try {
    let params = [
      {
        name: "AccountDetailID",
        value: null,
        type: sql.Int,
      },
      {
        name: "SAMACaseSerialNumber",
        value: data.samaCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "BanksCaseSerialNumber",
        value: data.banksCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "AccountIdentifier",
        value: data.accountIdentifier,
        type: sql.NVarChar,
      },
      {
        name: "ClientAccountTypeId",
        value: data.clientAccountTypeId,
        type: sql.Int,
      },
      {
        name: "AccountOpeningDate",
        value: data.accountOpeningDate,
        type: sql.Date,
      },
      {
        name: "AccountTypeId",
        value: data.accountTypeId,
        type: sql.Int,
      },
      {
        name: "AccountSegmentID",
        value: data.accountSegmentID,
        type: sql.Int,
      },
      {
        name: "AccountOpeningMechanismId",
        value: data.accountOpeningMechanismId,
        type: sql.Int,
      },
      {
        name: "AuthenticatedAccount",
        value: data.authenticatedAccount,
        type: sql.Int,
      },
      {
        name: "IsDraft",
        value: data.isDraft,
        type: sql.Bit,
      },
      {
        name: "LoggedInUserID",
        value: data.loggedInUserID,
        type: sql.NVarChar,
      },
      {
        name: "CreateSource",
        value: data.createSource,
        type: sql.VarChar,
      },
      {
        name: "BatchID",
        value: data.batchID,
        type: sql.UniqueIdentifier,
      },
      {
        name: "Action",
        value: "INSERT",
        type: sql.VarChar,
      },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute(
      "[uspFraudCaseAccountDetailAccountDetail_CRUD]"
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateOne = async (data) => {
  try {
    let params = [
      {
        name: "AccountDetailID",
        value: data.accountDetailId,
        type: sql.Int,
      },
      {
        name: "SAMACaseSerialNumber",
        value: data.samaCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "BanksCaseSerialNumber",
        value: data.banksCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "AccountIdentifier",
        value: data.accountIdentifier,
        type: sql.NVarChar,
      },
      {
        name: "ClientAccountTypeId",
        value: data.clientAccountTypeId,
        type: sql.Int,
      },
      {
        name: "AccountOpeningDate",
        value: data.accountOpeningDate,
        type: sql.Date,
      },
      {
        name: "AccountTypeId",
        value: data.accountTypeId,
        type: sql.Int,
      },
      {
        name: "AccountSegmentID",
        value: data.accountSegmentID,
        type: sql.Int,
      },
      {
        name: "AccountOpeningMechanismId",
        value: data.accountOpeningMechanismId,
        type: sql.Int,
      },
      {
        name: "AuthenticatedAccount",
        value: data.authenticatedAccount,
        type: sql.Int,
      },
      {
        name: "IsDraft",
        value: data.isDraft,
        type: sql.Bit,
      },
      {
        name: "LoggedInUserID",
        value: data.loggedInUserID,
        type: sql.NVarChar,
      },
      {
        name: "CreateSource",
        value: data.createSource,
        type: sql.VarChar,
      },
      {
        name: "BatchID",
        value: data.batchID,
        type: sql.UniqueIdentifier,
      },
      {
        name: "Action",
        value: "UPDATE",
        type: sql.VarChar,
      },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute(
      "uspFraudCaseAccountDetailAccountDetail_CRUD"
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteOne = async (data) => {
  try {
    const params = [
      {
        name: "AccountDetailID",
        value: data.accountDetailId,
        type: sql.Int,
      },
      {
        name: "SAMACaseSerialNumber",
        value: data.samaCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "BanksCaseSerialNumber",
        value: data.banksCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "AccountIdentifier",
        value: data.accountIdentifier,
        type: sql.NVarChar,
      },
      {
        name: "ClientAccountTypeId",
        value: data.clientAccountTypeId,
        type: sql.Int,
      },
      {
        name: "AccountOpeningDate",
        value: data.accountOpeningDate,
        type: sql.Date,
      },
      {
        name: "AccountTypeId",
        value: data.accountTypeId,
        type: sql.Int,
      },
      {
        name: "AccountSegmentID",
        value: data.accountSegmentID,
        type: sql.Int,
      },
      {
        name: "AccountOpeningMechanismId",
        value: data.accountOpeningMechanismId,
        type: sql.Int,
      },
      {
        name: "AuthenticatedAccount",
        value: data.authenticatedAccount,
        type: sql.Int,
      },
      {
        name: "IsDraft",
        value: data.isDraft,
        type: sql.Bit,
      },
      {
        name: "LoggedInUserID",
        value: data.loggedInUserID,
        type: sql.NVarChar,
      },
      {
        name: "CreateSource",
        value: data.createSource,
        type: sql.VarChar,
      },
      {
        name: "BatchID",
        value: data.batchID,
        type: sql.UniqueIdentifier,
      },
      {
        name: "Action",
        value: "DELETE",
        type: sql.VarChar,
      },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute(
      "uspFraudCaseAccountDetailAccountDetail_CRUD"
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAll = async () => {
  try {
    const params = [
      {
        name: "AccountDetailID",
        value: null,
        type: sql.Int,
      },
      {
        name: "SAMACaseSerialNumber",
        value: null,
        type: sql.NVarChar,
      },
      {
        name: "BanksCaseSerialNumber",
        value: null,
        type: sql.NVarChar,
      },
      {
        name: "AccountIdentifier",
        value: null,
        type: sql.NVarChar,
      },
      {
        name: "ClientAccountTypeId",
        value: null,
        type: sql.Int,
      },
      {
        name: "AccountOpeningDate",
        value: null,
        type: sql.Date,
      },
      {
        name: "AccountTypeId",
        value: null,
        type: sql.Int,
      },
      {
        name: "AccountSegmentID",
        value: null,
        type: sql.Int,
      },
      {
        name: "AccountOpeningMechanismId",
        value: null,
        type: sql.Int,
      },
      {
        name: "AuthenticatedAccount",
        value: null,
        type: sql.Int,
      },
      {
        name: "IsDraft",
        value: null,
        type: sql.Bit,
      },
      {
        name: "LoggedInUserID",
        value: null,
        type: sql.NVarChar,
      },
      {
        name: "CreateSource",
        value: null,
        type: sql.VarChar,
      },
      {
        name: "BatchID",
        value: null,
        type: sql.UniqueIdentifier,
      },
      {
        name: "Action",
        value: "SELECT ALL",
        type: sql.VarChar,
      },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute(
      "uspFraudCaseAccountDetailAccountDetail_CRUD"
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOne = async (data) => {
  try {
    const params = [
      {
        name: "AccountDetailID",
        value: null,
        type: sql.Int,
      },
      {
        name: "SAMACaseSerialNumber",
        value: data.samaCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "BanksCaseSerialNumber",
        value: data.banksCaseSerialNumber,
        type: sql.NVarChar,
      },
      {
        name: "AccountIdentifier",
        value: null,
        type: sql.NVarChar,
      },
      {
        name: "ClientAccountTypeId",
        value: null,
        type: sql.Int,
      },
      {
        name: "AccountOpeningDate",
        value: null,
        type: sql.Date,
      },
      {
        name: "AccountTypeId",
        value: null,
        type: sql.Int,
      },
      {
        name: "AccountSegmentID",
        value: null,
        type: sql.Int,
      },
      {
        name: "AccountOpeningMechanismId",
        value: null,
        type: sql.Int,
      },
      {
        name: "AuthenticatedAccount",
        value: null,
        type: sql.Int,
      },
      {
        name: "IsDraft",
        value: null,
        type: sql.Bit,
      },
      {
        name: "LoggedInUserID",
        value: null,
        type: sql.NVarChar,
      },
      {
        name: "CreateSource",
        value: null,
        type: sql.VarChar,
      },
      {
        name: "BatchID",
        value: null,
        type: sql.UniqueIdentifier,
      },
      {
        name: "Action",
        value: "SELECT",
        type: sql.VarChar,
      },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute(
      "uspFraudCaseAccountDetailAccountDetail_CRUD"
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
