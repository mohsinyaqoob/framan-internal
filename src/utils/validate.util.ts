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
