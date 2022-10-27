import sql from "mssql";

export const addOne = async (data) => {
  try {
    let params = [
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
        name: "ClientIdentifier",
        value: data.clientIdentifier,
        type: sql.NVarChar,
      },
      { name: "ClientTypeId", value: data.clientTypeId, type: sql.Int },
      {
        name: "ClientFullName",
        value: data.clientFullName,
        type: sql.NVarChar,
      },
      {
        name: "RegisteredPhoneNumber",
        value: data.registeredPhoneNumber,
        type: sql.NVarChar,
      },
      {
        name: "ClientCityAddress",
        value: data.clientCityAddress,
        type: sql.NVarChar,
      },
      {
        name: "ClientRegionId",
        value: data.clientRegionId,
        type: sql.NVarChar,
      },
      { name: "GenderId", value: data.genderId, type: sql.Int },
      { name: "DoB", value: data.dob, type: sql.Date },
      { name: "Nationality", value: data.nationality, type: sql.VarChar },
      { name: "IsDraft", value: data.isDraft, type: sql.Bit },
      {
        name: "LoggedInUserID",
        value: data.loggedInUserID,
        type: sql.NVarChar,
      },
      { name: "CreateSource", value: data.createSource, type: sql.VarChar },
      { name: "BatchID", value: data.batchID, type: sql.UniqueIdentifier },
      { name: "Action", value: "INSERT", type: sql.VarChar },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute("uspFraudCaseClientDetail_CRUD");
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAll = async () => {
  try {
    const result = await sql.query`
            EXEC uspFraudCaseClientDetail_CRUD
            @Action='SELECT ALL',
            @ClientDetailID=NULL,
            @SAMACaseSerialNumber=NULL,
            @BanksCaseSerialNumber=NULL,
            @ClientIdentifier=NULL,
            @ClientTypeId=NULL,
            @ClientFullName=NULL,
            @RegisteredPhoneNumber=NULL,
            @ClientCityAddress=NULL,
            @ClientRegionId=NULL,
            @GenderId=NULL,
            @DoB=NULL,
            @Nationality=NULL,
            @IsDraft=NULL,
            @LoggedInUserID=NULL,
            @CreateSource=NULL,
            @BatchID=NULL
      `;
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateOne = async (data) => {
  try {
    let params = [
      {
        name: "ClientDetailID",
        value: data.clientDetailId,
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
        name: "ClientIdentifier",
        value: data.clientIdentifier,
        type: sql.NVarChar,
      },
      { name: "ClientTypeId", value: data.clientTypeId, type: sql.Int },
      {
        name: "ClientFullName",
        value: data.clientFullName,
        type: sql.NVarChar,
      },
      {
        name: "RegisteredPhoneNumber",
        value: data.registeredPhoneNumber,
        type: sql.NVarChar,
      },
      {
        name: "ClientCityAddress",
        value: data.clientCityAddress,
        type: sql.NVarChar,
      },
      {
        name: "ClientRegionId",
        value: data.clientRegionId,
        type: sql.NVarChar,
      },
      { name: "GenderId", value: data.genderId, type: sql.Int },
      { name: "DoB", value: data.dob, type: sql.Date },
      { name: "Nationality", value: data.nationality, type: sql.VarChar },
      { name: "IsDraft", value: data.isDraft, type: sql.Bit },
      {
        name: "LoggedInUserID",
        value: data.loggedInUserID,
        type: sql.NVarChar,
      },
      { name: "CreateSource", value: data.createSource, type: sql.VarChar },
      { name: "BatchID", value: data.batchID, type: sql.UniqueIdentifier },
      { name: "Action", value: "UPDATE", type: sql.VarChar },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute("uspFraudCaseClientDetail_CRUD");
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOne = async (data) => {
  try {
    let params = [
      {
        name: "ClientDetailID",
        value: data.clientDetailId,
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
      { name: "Action", value: "SELECT", type: sql.VarChar },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute("uspFraudCaseClientDetail_CRUD");
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteOne = async (data) => {
  try {
    let params = [
      {
        name: "ClientDetailID",
        value: data.clientDetailId,
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
      { name: "Action", value: "DELETE", type: sql.VarChar },
    ];

    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.execute("uspFraudCaseClientDetail_CRUD");
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
