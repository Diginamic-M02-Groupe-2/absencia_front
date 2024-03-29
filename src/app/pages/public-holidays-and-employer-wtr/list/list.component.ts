import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {EmployerWtr} from "../../../entities/employer-wtr";
import {PublicHoliday} from "../../../entities/public-holiday";
import {ApiRoute, ApiService} from "../../../services/api.service";

@Component({
  selector: "app-public-holidays-and-employer-wtr-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.module.scss"],
})
export class PublicHolidaysAndEmployerWtrListComponent {
  publicHolidays!: Observable<PublicHoliday[]>;

  employerWtr!: Observable<EmployerWtr[]>;

  year: number = new Date().getFullYear();

  constructor(
    private apiService: ApiService,
  ) {
    this.getPublicHolidays();
    this.getEmployerWtr();
  }

  getPublicHolidays(): void {
    const url = `${ApiRoute.PUBLIC_HOLIDAY}/${this.year}`;

    this.publicHolidays = this.apiService.get<PublicHoliday[]>(url);

    this.publicHolidays.subscribe(console.debug);
  }

  getEmployerWtr(): void {
    const url = `${ApiRoute.EMPLOYER_WTR}/${this.year}`;

    this.employerWtr = this.apiService.get<EmployerWtr[]>(url);

    this.employerWtr.subscribe(console.debug);
  }
}