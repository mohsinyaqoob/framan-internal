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

// export const getAll = async () => {
//   try {
//     const result = await sql.query`
//             EXEC uspFraudCaseClientDetail_CRUD
//             @Action='SELECT ALL',
//             @ClientDetailID=NULL,
//             @SAMACaseSerialNumber=NULL,
//             @BanksCaseSerialNumber=NULL,
//             @ClientIdentifier=NULL,
//             @ClientTypeId=NULL,
//             @ClientFullName=NULL,
//             @RegisteredPhoneNumber=NULL,
//             @ClientCityAddress=NULL,
//             @ClientRegionId=NULL,
//             @GenderId=NULL,
//             @DoB=NULL,
//             @Nationality=NULL,
//             @IsDraft=NULL,
//             @LoggedInUserID=NULL,
//             @CreateSource=NULL,
//             @BatchID=NULL
//       `;
//     return result.recordset;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getOne = async (data) => {
//   try {
//     let params = [
//       {
//         name: "ClientDetailID",
//         value: data.clientDetailId,
//         type: sql.Int,
//       },
//       {
//         name: "SAMACaseSerialNumber",
//         value: data.samaCaseSerialNumber,
//         type: sql.NVarChar,
//       },
//       {
//         name: "BanksCaseSerialNumber",
//         value: data.banksCaseSerialNumber,
//         type: sql.NVarChar,
//       },
//       { name: "Action", value: "SELECT", type: sql.VarChar },
//     ];

//     const pool = sql.pool;
//     const result1 = await pool.request();
//     params.forEach((param) =>
//       result1.input(param.name, param.type, param.value)
//     );
//     const result = await result1.execute("uspFraudCaseClientDetail_CRUD");
//     return result.recordset;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const deleteOne = async (data) => {
//   try {
//     let params = [
//       {
//         name: "ClientDetailID",
//         value: data.clientDetailId,
//         type: sql.Int,
//       },
//       {
//         name: "SAMACaseSerialNumber",
//         value: data.samaCaseSerialNumber,
//         type: sql.NVarChar,
//       },
//       {
//         name: "BanksCaseSerialNumber",
//         value: data.banksCaseSerialNumber,
//         type: sql.NVarChar,
//       },
//       { name: "Action", value: "DELETE", type: sql.VarChar },
//     ];

//     const pool = sql.pool;
//     const result1 = await pool.request();
//     params.forEach((param) =>
//       result1.input(param.name, param.type, param.value)
//     );
//     const result = await result1.execute("uspFraudCaseClientDetail_CRUD");
//     return result.recordset;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
