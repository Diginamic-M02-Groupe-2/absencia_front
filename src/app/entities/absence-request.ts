import {AbsenceRequestStatus} from "./absence-request-status";
import {AbsenceType} from "./absence-type";

export class AbsenceRequest {
  id!: number;
  type!: AbsenceType;
  startedAt!: Date;
  endedAt!: Date;
  status!: AbsenceRequestStatus;
  reason?: string | null;
}