export const isValidAddFraudRequest = (data) => {
  const requiredKeys = [
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "fraudDetectionMechanismId",
    "startDate",
    "startIncidentTime",
    "numberOfFraudTransaction",
    "totalAmount",
    "frozenHeldAmount",
    "unRefundedUnFrozenUnHeldAmount",
    "complaintChannelId",
    "complaintDate",
    "complaintTime",
    "isLawInforcmentNotified",
    "clientIdentifier",
    "fraudMethodOther",
    "fraudMethodId",
    "imporsonatedName",
    "reachMethodId",
    "reachMethodOther",
    "reachMethodIdentifier",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchID",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidUpdateFraudRequest = (data) => {
  const requiredKeys = [
    "fraudCaseID",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "fraudDetectionMechanismId",
    "startDate",
    "startIncidentTime",
    "numberOfFraudTransaction",
    "totalAmount",
    "frozenHeldAmount",
    "unRefundedUnFrozenUnHeldAmount",
    "complaintChannelId",
    "complaintDate",
    "complaintTime",
    "isLawInforcmentNotified",
    "clientIdentifier",
    "fraudMethodOther",
    "fraudMethodId",
    "imporsonatedName",
    "reachMethodId",
    "reachMethodOther",
    "reachMethodIdentifier",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchID",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidAddClientInfoRequest = (data) => {
  const requiredKeys = [
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "clientIdentifier",
    "clientTypeId",
    "clientFullName",
    "registeredPhoneNumber",
    "clientCityAddress",
    "clientRegionId",
    "genderId",
    "dob",
    "nationality",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchID",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidUpdateClientInfoRequest = (data) => {
  const requiredKeys = [
    "clientDetailId",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "clientIdentifier",
    "clientTypeId",
    "clientFullName",
    "registeredPhoneNumber",
    "clientCityAddress",
    "clientRegionId",
    "genderId",
    "dob",
    "nationality",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchID",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidGetOneClientInfoRequest = (data) => {
  const requiredKeys = [
    "clientDetailId",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidDeleteOneClientInfoRequest = (data) => {
  const requiredKeys = [
    "clientDetailId",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidAddOneAccountDetailRequest = (data) => {
  const requiredKeys = [
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "accountIdentifier",
    "clientAccountTypeId",
    "accountOpeningDate",
    "accountTypeId",
    "accountSegmentID",
    "accountOpeningMechanismId",
    "authenticatedAccount",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchID",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidUpdateOneAccountDetailRequest = (data) => {
  const requiredKeys = [
    "accountDetailId",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "accountIdentifier",
    "clientAccountTypeId",
    "accountOpeningDate",
    "accountTypeId",
    "accountSegmentID",
    "accountOpeningMechanismId",
    "authenticatedAccount",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchID",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidDeleteAccountDetailRequest = (data) => {
  const requiredKeys = [
    "accountDetailId",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidGetOneAccountDetailsRequest = (data) => {
  const requiredKeys = ["samaCaseSerialNumber", "banksCaseSerialNumber"];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidAddOneDirectChannel = (data) => {
  const requiredKeys = [
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "transactionId",
    "trustedDevice",
    "applicationId",
    "deviceId",
    "accessedCountryCode",
    "eventDate",
    "eventTime",
    "complaintChannelId",
    "transactionTypeId",
    "transactionTypeOther",
    "transactionAmount",
    "frozenHeldAmount",
    "unRefundedUnFrozenUnHeldAmount",
    "beneficiaryId",
    "beneficiaryEntityId",
    "beneficiaryEntityOther",
    "beneficiaryPossessionTypeId",
    "possessionId",
    "isDraft",
    "loggedInUserId",
    "createSource",
    "batchId",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidUpdateOneDirectChannel = (data) => {
  const requiredKeys = [
    "caseDirectChannelId",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "transactionId",
    "trustedDevice",
    "applicationId",
    "deviceId",
    "accessedCountryCode",
    "eventDate",
    "eventTime",
    "complaintChannelId",
    "transactionTypeId",
    "transactionTypeOther",
    "transactionAmount",
    "frozenHeldAmount",
    "unRefundedUnFrozenUnHeldAmount",
    "beneficiaryId",
    "beneficiaryEntityId",
    "beneficiaryEntityOther",
    "beneficiaryPossessionTypeId",
    "possessionId",
    "isDraft",
    "loggedInUserId",
    "createSource",
    "batchId",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidAddFinalChannel = (data) => {
  const requiredKeys = [
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "transactionId",
    "eventDate",
    "eventTime",
    "beneficiaryEntityId",
    "beneficiaryEntityOther",
    "cashOutMethodId",
    "cashOutMethodOther",
    "totalAmount",
    "frozenHeldAmount",
    "refundedAmount",
    "frozenHeldAmount",
    "unRefundedUnFrozenUnheldAmount",
    "cashoutTxnSourceCountry",
    "merchantName",
    "beneficiaryId",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchId",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidUpdateFinalChannel = (data) => {
  const requiredKeys = [
    "caseFinalChannelId",
    "samaCaseSerialNumber",
    "banksCaseSerialNumber",
    "transactionId",
    "eventDate",
    "eventTime",
    "beneficiaryEntityId",
    "beneficiaryEntityOther",
    "cashOutMethodId",
    "cashOutMethodOther",
    "totalAmount",
    "frozenHeldAmount",
    "refundedAmount",
    "frozenHeldAmount",
    "unRefundedUnFrozenUnheldAmount",
    "cashoutTxnSourceCountry",
    "merchantName",
    "beneficiaryId",
    "isDraft",
    "loggedInUserID",
    "createSource",
    "batchId",
  ];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};

export const isValidGetOneFinalChannel = (data) => {
  const requiredKeys = ["samaCaseSerialNumber", "banksCaseSerialNumber"];

  let validationErrors = [];

  requiredKeys.forEach((key) => {
    if (data[key] === undefined) {
      validationErrors.push(`${key} is required`);
    }
  });

  if (validationErrors.length === 0) {
    return { isValid: true };
  }

  return { isValid: false, errors: validationErrors };
};
