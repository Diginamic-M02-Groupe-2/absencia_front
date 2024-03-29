import {AbsenceRequest} from "../entities/absence-request";

export class GetAbsenceRequestResponse {
  absenceRequests!: AbsenceRequest[];
  remainingPaidLeaves!: number;
  remainingEmployeeWtr!: number;
}