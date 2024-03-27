import {Option} from "./option";

export enum AbsenceType {
  PAID_LEAVE = "PAID_LEAVE", // Congé payé
  UNPAID_LEAVE = "UNPAID_LEAVE", // Congé sans solde
  EMPLOYEE_WTR = "EMPLOYEE_WTR", // RTT employé
}

export const absenceTypeOptions: Option[] = [
  {
    value: AbsenceType.PAID_LEAVE.toString(),
    label: "Congé payé",
  }, {
    value: AbsenceType.UNPAID_LEAVE.toString(),
    label: "Congé sans solde",
  }, {
    value: AbsenceType.EMPLOYEE_WTR.toString(),
    label: "RTT employé",
  },
];

export function toString(absenceRequestStatus: string): string {
  switch (absenceRequestStatus) {

    case "PUBLIC_HOLIDAY":
      return "Férié";

    case "PAID_LEAVE":
      return "Congé payé";

    case "UNPAID_LEAVE":
      return "Congé sans solde";

    case "TOIL_DAY":
      return "RTT";

  }


  return "";

}

export class Absence {
  id!: number;
  type!: AbsenceType;
  startedAt!: Date;
  endedAt!: Date;
}
