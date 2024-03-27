import {AbsenceRequestStatus} from "./absence-request-status";
import {AbsenceType} from "./absence-type";

export class AbsenceRequest {
  id!: number;
  type!: AbsenceType;
  status!: AbsenceRequestStatus;
  startedAt!: Date;
  endedAt!: Date;
  reason?: string;
}