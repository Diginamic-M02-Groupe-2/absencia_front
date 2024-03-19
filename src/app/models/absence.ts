export enum AbsenceType {
  PUBLIC_HOLIDAY, // Férié
  PAID_LEAVE, // Congé payé
  UNPAID_LEAVE, // Congé sans solde
  TOIL_DAY, // RTT
}

export class Absence {
  id!: number;
  type!: AbsenceType;
  startedAt!: Date;
  endedAt!: Date;
}
