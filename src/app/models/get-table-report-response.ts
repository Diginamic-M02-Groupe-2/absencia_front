import {AbsenceRequest} from "../entities/absence-request";
import {EmployerWtr} from "../entities/employer-wtr";
import {PublicHoliday} from "../entities/public-holiday";

export interface GetTableReportResponse {
  table: TableRow[];
  employerWtr: EmployerWtr[];
  publicHolidays: PublicHoliday[];
}

export interface TableRow {
  id: number;
  firstName: string;
  lastName: string;
  absenceRequests: AbsenceRequest[];
}