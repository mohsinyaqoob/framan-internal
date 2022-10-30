import sql from "mssql";

export const getAll = async () => {
  try {
    const result = await sql.query`SELECT * FROM DirectChannel`;
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDirectChannelById = async (id: number) => {
  try {
    const result =
      await sql.query`SELECT * FROM DirectChannel WHERE DirectChannelId = ${id}`;
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const addOne = async (data) => {
  try {
    const params = [
      {
        name: "CaseDirectChannelID",
        value: null,
        type: sql.VarChar,
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
        name: "TransactionID",
        value: data.transactionId,
        type: sql.NVarChar,
      },
      {
        name: "TrustedDevice",
        value: data.trustedDevice,
        type: sql.Int,
      },
      {
        name: "ApplicationID",
        value: data.applicationId,
        type: sql.NVarChar,
      },
      {
        name: "DeviceID",
        value: data.deviceId,
        type: sql.NVarChar,
      },
      {
        name: "AccessedCountryCode",
        value: data.accessedCountryCode,
        type: sql.NVarChar,
      },
      {
        name: "EventDate",
        value: data.eventDate,
        type: sql.Date,
      },
      {
        name: "EventTime",
        value: data.eventTime,
        type: sql.VarChar,
      },
      {
        name: "ComplaintChannelId",
        value: data.complaintChannelId,
        type: sql.Int,
      },
      {
        name: "TransactionTypeId",
        value: data.transactionTypeId,
        type: sql.Int,
      },
      {
        name: "TransactionTypeOther",
        value: data.transactionTypeOther,
        type: sql.NVarChar,
      },
      {
        name: "TransactionAmount",
        value: data.transactionAmount,
        type: sql.Numeric,
      },
      {
        name: "FrozenHeldAmount",
        value: data.frozenHeldAmount,
        type: sql.Numeric,
      },
      {
        name: "UnRefundedUnFrozenUnHGeldAmount",
        value: data.unRefundedUnFrozenUnHeldAmount,
        type: sql.Numeric,
      },
      {
        name: "BeneficiaryID",
        value: data.beneficiaryId,
        type: sql.NVarChar,
      },
      {
        name: "BeneficiaryEntityId",
        value: data.beneficiaryEntityId,
        type: sql.Int,
      },
      {
        name: "BeneficiaryEntityOther",
        value: data.beneficiaryEntityOther,
        type: sql.NVarChar,
      },
      {
        name: "BeneficiaryPossessionTypeId",
        value: data.beneficiaryPossessionTypeId,
        type: sql.Int,
      },
      {
        name: "PossessionID",
        value: data.possessionId,
        type: sql.NVarChar,
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
        value: data.batchId,
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
    const result = await result1.execute("uspFraudCaseDirectChannel_CRUD");
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateOne = async (data) => {
  try {
    const params = [
      {
        name: "CaseDirectChannelID",
        value: data.caseDirectChannelId,
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
        name: "TransactionID",
        value: data.transactionId,
        type: sql.NVarChar,
      },
      {
        name: "TrustedDevice",
        value: data.trustedDevice,
        type: sql.Int,
      },
      {
        name: "ApplicationID",
        value: data.applicationId,
        type: sql.NVarChar,
      },
      {
        name: "DeviceID",
        value: data.deviceId,
        type: sql.NVarChar,
      },
      {
        name: "AccessedCountryCode",
        value: data.accessedCountryCode,
        type: sql.NVarChar,
      },
      {
        name: "EventDate",
        value: data.eventDate,
        type: sql.Date,
      },
      {
        name: "EventTime",
        value: data.eventTime,
        type: sql.VarChar,
      },
      {
        name: "ComplaintChannelId",
        value: data.complaintChannelId,
        type: sql.Int,
      },
      {
        name: "TransactionTypeId",
        value: data.transactionTypeId,
        type: sql.Int,
      },
      {
        name: "TransactionTypeOther",
        value: data.transactionTypeOther,
        type: sql.NVarChar,
      },
      {
        name: "TransactionAmount",
        value: data.transactionAmount,
        type: sql.Numeric,
      },
      {
        name: "FrozenHeldAmount",
        value: data.frozenHeldAmount,
        type: sql.Numeric,
      },
      {
        name: "UnRefundedUnFrozenUnHGeldAmount",
        value: data.unRefundedUnFrozenUnHeldAmount,
        type: sql.Numeric,
      },
      {
        name: "BeneficiaryID",
        value: data.beneficiaryId,
        type: sql.NVarChar,
      },
      {
        name: "BeneficiaryEntityId",
        value: data.beneficiaryEntityId,
        type: sql.Int,
      },
      {
        name: "BeneficiaryEntityOther",
        value: data.beneficiaryEntityOther,
        type: sql.NVarChar,
      },
      {
        name: "BeneficiaryPossessionTypeId",
        value: data.beneficiaryPossessionTypeId,
        type: sql.Int,
      },
      {
        name: "PossessionID",
        value: data.possessionId,
        type: sql.NVarChar,
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
        value: data.batchId,
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
    const result = await result1.execute("uspFraudCaseDirectChannel_CRUD");
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
