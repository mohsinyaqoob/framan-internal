import sql from "mssql";

export const getOne = async (bankCaseSerial, SAMACaseSerial) => {
  try {
    let result = await sql.query(
      `EXEC uspFraudCase_CRUD @Action='SELECT', @BanksCaseSerialNumber='${bankCaseSerial}', @SAMACaseSerialNumber='${SAMACaseSerial}'`
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAll = async () => {
  try {
    let result = await sql.query(`EXEC uspFraudCase_CRUD @Action='SELECT ALL'`);
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const addOne = async (data) => {
  try {
    let result = await sql.query(`
        EXEC uspFraudCase_CRUD
        @Action='INSERT',
        @SAMACaseSerialNumber='${data.samaCaseSerialNumber}',
        @BanksCaseSerialNumber='${data.banksCaseSerialNumber}',
        @FraudDetectionMechanismId='${data.fraudDetectionMechanismId}',
        @StartDate='${data.startDate}',
        @StartIncidentTime='${data.startIncidentTime}',
        @NumberOfFraudTransaction='${data.numberOfFraudTransaction}',
        @TotalAmount='${data.totalAmount}',
        @FrozenHeldAmount='${data.frozenHeldAmount}',
        @UnRefundedUnFrozenUnHeldAmount='${data.unRefundedUnFrozenUnHeldAmount}',
        @ComplaintChannelId='${data.complaintChannelId}',
        @ComplaintDate='${data.complaintDate}',
        @ComplaintTime='${data.complaintTime}',
        @IsLawInforcmentNotified='${data.isLawInforcmentNotified}',
        @ClientIdentifier='${data.clientIdentifier}',
        @FraudMethodOther='${data.fraudMethodOther}',
        @FraudMethodId='${data.fraudMethodId}',
        @ImporsonatedName='${data.imporsonatedName}',
        @ReachMethodId='${data.reachMethodId}',
        @ReachMethodOther='${data.reachMethodOther}',
        @ReachMethodIdentifier='${data.reachMethodIdentifier}',
        @IsDraft='${data.isDraft}',
        @LoggedInUserID='${data.loggedInUserID}',
        @CreateSource='${data.createSource}',
        @BatchID='${data.batchID}'
    `);
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
