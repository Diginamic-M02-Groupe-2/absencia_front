import {AbsenceRequest} from "../entities/absence-request";

export type GetEmployeeAbsenceRequestResponse = GetEmployeeAbsenceRequestResponseEmployee[];

class GetEmployeeAbsenceRequestResponseEmployee {
  id!: number;
  firstName!: string;
  lastName!: string;
  absenceRequests!: AbsenceRequest[];
}