import {EmployerWtr} from "../entities/employer-wtr";
import {PublicHoliday} from "../entities/public-holiday";

export interface GetEmployerWtrAndPublicHolidaysResponse {
  employerWtr: EmployerWtr[];
  publicHolidays: PublicHoliday[];
}