import sql from "mssql";

export const getOne = async (bankCaseSerial, SAMACaseSerial) => {
  try {
    let result = await sql.query(
      `
        EXEC uspFraudCase_CRUD
        @Action='SELECT',
        @FraudCaseID=${null},
		    @SAMACaseSerialNumber='${SAMACaseSerial}',
		    @BanksCaseSerialNumber='${bankCaseSerial}',
		    @FraudDetectionMechanismId=${null},
		    @StartDate=${null},
		    @StartIncidentTime=${null},
		    @NumberOfFraudTransaction=${null},
		    @TotalAmount=${null},
		    @FrozenHeldAmount=${null},
		    @UnRefundedUnFrozenUnHeldAmount=${null},
		    @ComplaintChannelId=${null},
		    @ComplaintDate=${null},
		    @ComplaintTime=${null},
		    @IsLawInforcmentNotified=${null},
		    @ClientIdentifier=${null},
		    @FraudMethodOther=${null},
		    @FraudMethodId=${null},
		    @ImporsonatedName=${null},
		    @ReachMethodId=${null},
		    @ReachMethodOther=${null},
		    @ReachMethodIdentifier=${null},
		    @IsDraft=${null},
		    @LoggedInUserID=${null},
		    @CreateSource=${null},
		    @BatchID=${null}
      `
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAll = async () => {
  try {
    let result = await sql.query(`
          EXEC uspFraudCase_CRUD
          @Action='SELECT ALL',
          @FraudCaseID=${null},
		      @SAMACaseSerialNumber=${null},
		      @BanksCaseSerialNumber=${null},
		      @FraudDetectionMechanismId=${null},
		      @StartDate=${null},
		      @StartIncidentTime=${null},
		      @NumberOfFraudTransaction=${null},
		      @TotalAmount=${null},
		      @FrozenHeldAmount=${null},
		      @UnRefundedUnFrozenUnHeldAmount=${null},
		      @ComplaintChannelId=${null},
		      @ComplaintDate=${null},
		      @ComplaintTime=${null},
		      @IsLawInforcmentNotified=${null},
		      @ClientIdentifier=${null},
		      @FraudMethodOther=${null},
		      @FraudMethodId=${null},
		      @ImporsonatedName=${null},
		      @ReachMethodId=${null},
		      @ReachMethodOther=${null},
		      @ReachMethodIdentifier=${null},
		      @IsDraft=${null},
		      @LoggedInUserID=${null},
		      @CreateSource=${null},
		      @BatchID=${null}
        `);
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

export const updateOne = async (data) => {
  try {
    let result = await sql.query(`
        EXEC uspFraudCase_CRUD
        @Action='UPDATE',
        @FraudCaseID = '${data.fraudCaseID}',
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

export const deleteOneFraudCase = async (
  fraudCaseId,
  banksCaseSerial,
  samaCaseSerial
) => {
  try {
    let result = await sql.query(
      `
      EXEC uspFraudCase_CRUD
      @Action='DELETE',
      @FraudCaseID=${fraudCaseId},
      @SAMACaseSerialNumber='${samaCaseSerial}',
      @BanksCaseSerialNumber='${banksCaseSerial}',
      @FraudDetectionMechanismId=${null},
      @StartDate=${null},
      @StartIncidentTime=${null},
      @NumberOfFraudTransaction=${null},
      @TotalAmount=${null},
      @FrozenHeldAmount=${null},
      @UnRefundedUnFrozenUnHeldAmount=${null},
      @ComplaintChannelId=${null},
      @ComplaintDate=${null},
      @ComplaintTime=${null},
      @IsLawInforcmentNotified=${null},
      @ClientIdentifier=${null},
      @FraudMethodOther=${null},
      @FraudMethodId=${null},
      @ImporsonatedName=${null},
      @ReachMethodId=${null},
      @ReachMethodOther=${null},
      @ReachMethodIdentifier=${null},
      @IsDraft=${null},
      @LoggedInUserID=${null},
      @CreateSource=${null},
      @BatchID=${null}
      `
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
