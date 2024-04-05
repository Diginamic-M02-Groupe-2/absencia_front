import {Component} from "@angular/core";
import {firstValueFrom} from "rxjs";
import {EmployerWtr} from "../../../entities/employer-wtr";
import {PublicHoliday} from "../../../entities/public-holiday";
import {GetEmployerWtrAndPublicHolidaysResponse} from "../../../models/get-employer-wtr-and-public-holidays-response";
import {Route} from "../../../models/route";
import {ApiRoute, ApiService} from "../../../services/api.service";

@Component({
  selector: "app-employer-wtr-and-public-holiday-list",
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.module.scss",
})
export class EmployerWtrAndPublicHolidayListComponent {
  createEmployerWtrRoute: string = `/${Route.EMPLOYER_WTR_CREATE}`;

  employerWtrAndPublicHolidays: (EmployerWtr|PublicHoliday)[] = [];

  year: number = new Date().getFullYear();

  constructor(
    private apiService: ApiService,
  ) {
    this.getEmployerWtrAndPublicHolidays();
  }

  async getEmployerWtrAndPublicHolidays(): Promise<void> {
    const url = `${ApiRoute.GET_EMPLOYER_WTR_AND_PUBLIC_HOLIDAYS}/${this.year}`;
    const response = await firstValueFrom(this.apiService.get<GetEmployerWtrAndPublicHolidaysResponse>(url));

    this.employerWtrAndPublicHolidays = [
      ...response.employerWtr,
      ...response.publicHolidays,
    ];
  }
}