import {Option} from "../models/option";

export enum AbsenceType {
  PAID_LEAVE = "PAID_LEAVE", // Congé payé
  UNPAID_LEAVE = "UNPAID_LEAVE", // Congé sans solde
  EMPLOYEE_WTR = "EMPLOYEE_WTR", // RTT employé
}

export const absenceTypeStrings: Record<AbsenceType, string> = {
  [AbsenceType.PAID_LEAVE]: "Congé payé",
  [AbsenceType.UNPAID_LEAVE]: "Congé sans solde",
  [AbsenceType.EMPLOYEE_WTR]: "RTT employé",
};

export const absenceTypeOptions: Option[] = [
  {
    value: AbsenceType.PAID_LEAVE.toString(),
    label: absenceTypeStrings[AbsenceType.PAID_LEAVE],
  }, {
    value: AbsenceType.UNPAID_LEAVE.toString(),
    label: absenceTypeStrings[AbsenceType.UNPAID_LEAVE],
  }, {
    value: AbsenceType.EMPLOYEE_WTR.toString(),
    label: absenceTypeStrings[AbsenceType.EMPLOYEE_WTR],
  },
];