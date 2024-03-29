import {AbsenceRequestStatus} from "./absence-request-status";
import {AbsenceType} from "./absence-type";
import { User } from "./user/user";

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