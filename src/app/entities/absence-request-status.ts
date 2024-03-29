import {Option} from "../models/option";

export enum AbsenceRequestStatus {
  INITIAL = "INITIAL", // Initial
  PENDING = "PENDING", // En attente de validation
  APPROVED = "APPROVED", // Validé
  REJECTED = "REJECTED", // Refusé
}

export const absenceRequestStatusStrings: Record<AbsenceRequestStatus, string> = {
  [AbsenceRequestStatus.INITIAL]: "Initial",
  [AbsenceRequestStatus.PENDING]: "En attente de validation",
  [AbsenceRequestStatus.APPROVED]: "Validé",
  [AbsenceRequestStatus.REJECTED]: "Refusé",
};

export const absenceRequestStatusOptions: Option[] = [
  {
    value: AbsenceRequestStatus.INITIAL.toString(),
    label: absenceRequestStatusStrings[AbsenceRequestStatus.INITIAL],
  }, {
    value: AbsenceRequestStatus.PENDING.toString(),
    label: absenceRequestStatusStrings[AbsenceRequestStatus.PENDING],
  }, {
    value: AbsenceRequestStatus.APPROVED.toString(),
    label: absenceRequestStatusStrings[AbsenceRequestStatus.APPROVED],
  }, {
    value: AbsenceRequestStatus.REJECTED.toString(),
    label: absenceRequestStatusStrings[AbsenceRequestStatus.REJECTED],
  },
];