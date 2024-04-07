import {Component, Input} from "@angular/core";
import {EmployerWtr} from "../../../entities/employer-wtr";
import {PublicHoliday} from "../../../entities/public-holiday";
import {TableRow} from "../../../models/get-table-report-response";

@Component({
  selector: "app-report-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.module.scss",
})
export class ReportTableComponent {
  @Input()
  month!: number;

  @Input()
  year!: number;

  @Input()
  calendar!: number[];

  @Input()
  rows!: TableRow[];

  @Input()
  employerWtr!: EmployerWtr[];

  @Input()
  publicHolidays!: PublicHoliday[];

  getDayLetter(day: number, row: TableRow): undefined|string {
    const date = this.getDate(day);

    // Search for a public holiday
    for (const publicHoliday of this.publicHolidays) {
      const publicHolidayDate = new Date(publicHoliday.date);

      if (publicHolidayDate.getTime() === date.getTime()) {
        return "F";
      }
    }

    // Search for an employer WTR
    for (const employerWtr of this.employerWtr) {
      const employerWtrDate = new Date(employerWtr.date);

      if (employerWtrDate.getTime() === date.getTime()) {
        return "R";
      }
    }

    // Search for an absence request
    for (const absenceRequest of row.absenceRequests) {
      const absenceRequestStartedAt = new Date(absenceRequest.startedAt);
      const absenceRequestEndedAt = new Date(absenceRequest.endedAt);

      if (date.getTime() >= absenceRequestStartedAt.getTime() && date.getTime() <= absenceRequestEndedAt.getTime()) {
        return "C";
      }
    }

    return;
  }

  /**
   * Returns a date created from the day of the month, without the timezone offset
   */
  private getDate(day: number): Date {
    const date = new Date(this.year, this.month, day);

    return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  }
}