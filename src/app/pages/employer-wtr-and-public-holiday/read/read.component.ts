import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {EmployerWtr} from "../../../entities/employer-wtr";
import {PublicHoliday} from "../../../entities/public-holiday";
import {GetEmployerWtrAndPublicHolidaysResponse} from "../../../models/get-employer-wtr-and-public-holidays-response";
import {Route} from "../../../models/route";
import {ApiRoute, ApiService} from "../../../services/api.service";

@Component({
  selector: "app-employer-wtr-and-public-holiday-read",
  templateUrl: "./read.component.html",
  styleUrl: "./read.component.module.scss",
})
export class EmployerWtrAndPublicHolidayReadComponent {
  formGroup: FormGroup;

  createEmployerWtrRoute: string = `/${Route.EMPLOYER_WTR_CREATE}`;

  employerWtrAndPublicHolidays: (EmployerWtr|PublicHoliday)[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {
    this.formGroup = this.formBuilder.group({
      year: [new Date(new Date().getFullYear().toString())],
    });

    this.formGroup.get("year")!.valueChanges.subscribe((value: Date) => this.getEmployerWtrAndPublicHolidays());

    this.getEmployerWtrAndPublicHolidays();
  }

  async getEmployerWtrAndPublicHolidays(): Promise<void> {
    const url = `${ApiRoute.GET_EMPLOYER_WTR_AND_PUBLIC_HOLIDAYS}/${this.formGroup.get("year")!.value.getFullYear()}`;
    const response = await firstValueFrom(this.apiService.get<GetEmployerWtrAndPublicHolidaysResponse>(url));

    this.employerWtrAndPublicHolidays = [
      ...response.employerWtr,
      ...response.publicHolidays,
    ];
  }
}