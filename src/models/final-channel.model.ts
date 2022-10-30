import sql from "mssql";

export const addOne = async (data) => {
  try {
    let params = [
      {
        name: "CaseFinalChannelId",
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
        name: "TransactionID",
        value: data.transactionId,
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
        name: "CashOutMethodId",
        value: data.cashOutMethodId,
        type: sql.Int,
      },
      {
        name: "CashOutMethodOther",
        value: data.cashOutMethodOther,
        type: sql.NVarChar,
      },
      {
        name: "TotalAmount",
        value: data.totalAmount,
        type: sql.Numeric,
      },
      {
        name: "FrozenHeldAmount",
        value: data.frozenHeldAmount,
        type: sql.Numeric,
      },
      {
        name: "RefundedAmount",
        value: data.refundedAmount,
        type: sql.Numeric,
      },
      {
        name: "UnRefundedUnFrozenUnheldAmount",
        value: data.unRefundedUnFrozenUnheldAmount,
        type: sql.Numeric,
      },
      {
        name: "CashoutTxnSourceCountry",
        value: data.cashoutTxnSourceCountry,
        type: sql.NVarChar,
      },
      {
        name: "MerchantName",
        value: data.merchantName,
        type: sql.NVarChar,
      },
      {
        name: "BeneficiaryId",
        value: data.beneficiaryId,
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
    const result = await result1.execute(
      "[uspFraudCaseFinalChannel_CRUD]"
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
          name: "CaseFinalChannelId",
          value: data.caseFinalChannelId,
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
          name: "CashOutMethodId",
          value: data.cashOutMethodId,
          type: sql.Int,
        },
        {
          name: "CashOutMethodOther",
          value: data.cashOutMethodOther,
          type: sql.NVarChar,
        },
        {
          name: "TotalAmount",
          value: data.totalAmount,
          type: sql.Numeric,
        },
        {
          name: "FrozenHeldAmount",
          value: data.frozenHeldAmount,
          type: sql.Numeric,
        },
        {
          name: "RefundedAmount",
          value: data.refundedAmount,
          type: sql.Numeric,
        },
        {
          name: "UnRefundedUnFrozenUnheldAmount",
          value: data.unRefundedUnFrozenUnheldAmount,
          type: sql.Numeric,
        },
        {
          name: "CashoutTxnSourceCountry",
          value: data.cashoutTxnSourceCountry,
          type: sql.NVarChar,
        },
        {
          name: "MerchantName",
          value: data.merchantName,
          type: sql.NVarChar,
        },
        {
          name: "BeneficiaryId",
          value: data.beneficiaryId,
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
      const result = await result1.execute(
        "uspFraudCaseFinalChannel_CRUD"
      );
      return result.recordset;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getAll = async () => {
    try {
        let params = [
          {
            name: "CaseFinalChannelId",
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
            name: "TransactionID",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "EventDate",
            value: null,
            type: sql.Date,
          },
          {
            name: "EventTime",
            value: null,
            type: sql.VarChar,
          },
          {
            name: "BeneficiaryEntityId",
            value: null,
            type: sql.Int,
          },
          {
            name: "BeneficiaryEntityOther",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "CashOutMethodId",
            value: null,
            type: sql.Int,
          },
          {
            name: "CashOutMethodOther",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "TotalAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "FrozenHeldAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "RefundedAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "UnRefundedUnFrozenUnheldAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "CashoutTxnSourceCountry",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "MerchantName",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "BeneficiaryId",
            value:null,
            type: sql.NVarChar,
          },
          {
            name: "IsDraft",
            value: null,
            type: sql.Bit,
          },
          {
            name: "LoggedInUserID",
            value:null,
            type: sql.NVarChar,
          },
          {
            name: "CreateSource",
            value:null,
            type: sql.VarChar,
          },
          {
            name: "BatchID",
            value:null,
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
          "[uspFraudCaseFinalChannel_CRUD]"
        );
        return result.recordset;
      } catch (error) {
        throw new Error(error);
      }
  };

  export const getOne = async (data) => {
    try {
        let params = [
          {
            name: "CaseFinalChannelId",
            value: null,
            type: sql.Int,
          },
          {
            name: "SAMACaseSerialNumber",
            value:  data.samaCaseSerialNumber,
            type: sql.NVarChar,
          },
          {
            name: "BanksCaseSerialNumber",
            value: data.banksCaseSerialNumber,
            type: sql.NVarChar,
          },
          {
            name: "TransactionID",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "EventDate",
            value: null,
            type: sql.Date,
          },
          {
            name: "EventTime",
            value: null,
            type: sql.VarChar,
          },
          {
            name: "BeneficiaryEntityId",
            value: null,
            type: sql.Int,
          },
          {
            name: "BeneficiaryEntityOther",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "CashOutMethodId",
            value: null,
            type: sql.Int,
          },
          {
            name: "CashOutMethodOther",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "TotalAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "FrozenHeldAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "RefundedAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "UnRefundedUnFrozenUnheldAmount",
            value: null,
            type: sql.Numeric,
          },
          {
            name: "CashoutTxnSourceCountry",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "MerchantName",
            value: null,
            type: sql.NVarChar,
          },
          {
            name: "BeneficiaryId",
            value:null,
            type: sql.NVarChar,
          },
          {
            name: "IsDraft",
            value: null,
            type: sql.Bit,
          },
          {
            name: "LoggedInUserID",
            value:null,
            type: sql.NVarChar,
          },
          {
            name: "CreateSource",
            value:null,
            type: sql.VarChar,
          },
          {
            name: "BatchID",
            value:null,
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
          "[uspFraudCaseFinalChannel_CRUD]"
        );
        return result.recordset;
      } catch (error) {
        throw new Error(error);
      }
  };
  