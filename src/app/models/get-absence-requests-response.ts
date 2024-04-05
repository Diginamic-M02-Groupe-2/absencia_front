import {AbsenceRequest} from "../entities/absence-request";

export interface GetAbsenceRequestsResponse {
  absenceRequests: AbsenceRequest[];
  remainingPaidLeaves: number;
  remainingEmployeeWtr: number;
}