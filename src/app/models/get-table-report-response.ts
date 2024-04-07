import {AbsenceRequest} from "../entities/absence-request";
import {EmployerWtr} from "../entities/employer-wtr";
import {PublicHoliday} from "../entities/public-holiday";

export interface GetTableReportResponse {
  absenceRequests: AbsenceRequest[];
  employerWtr: EmployerWtr[];
  publicHolidays: PublicHoliday[];
}