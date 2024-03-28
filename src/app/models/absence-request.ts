import {AbsenceRequestStatus} from './absence-status';
import { AbsenceType } from './absence-type';
import { User } from './User/user';

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

export class AbsenceRequest {
  id!: number;
  user?: User;
  type!: AbsenceType;
  startedAt!: Date;
  endedAt!: Date;
  deletedAt?: Date;
  status!: AbsenceRequestStatus;
  reason?: string | null;
}