import {AbsenceRequest} from "./absence-request";

export class GetAbsenceRequestResponse {
  absenceRequests!: AbsenceRequest[];
  remainingPaidLeaves!: number;
  remainingEmployeeWtr!: number;
}