import { Absence, AbsenceType } from './absence';
import { AbsenceRequestStatus } from './absence-status';
import { User } from './user';

export class AbsenceRequest {
  id!: number;
  user?: User;
  absence!: Absence;
  status!: AbsenceRequestStatus;
  reason?: string | null;
}

export class AbsenceRequestCreate {
  startedAt!: string;
  endedAt!: string;
  type!: string;
  reason!: string;
}
