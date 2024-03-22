export enum AbsenceType {
  PUBLIC_HOLIDAY, // Férié
  PAID_LEAVE, // Congé payé
  UNPAID_LEAVE, // Congé sans solde
  TOIL_DAY, // RTT
}

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
