import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {Service, serviceOptions} from "../../../entities/user/service";
import {User} from "../../../entities/user/user";
import {GetTableReportResponse} from "../../../models/get-table-report-response";
import {Option} from "../../../models/option";
import {ApiRoute, ApiService, HttpMethod} from "../../../services/api.service";
import {UserService} from "../../../services/user.service";

type Calendar = (null|number)[][];

interface Conge {
  nom: string;
  service: Service; // Ajout de la propriété service
  [key: string]: string | undefined;
}

@Component({
  selector: "app-table-report",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.module.scss",
})
export class TableReportComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.GET;

  formAction: string = ApiRoute.REPORT_TABLE;

  services: Option[] = serviceOptions;

  calendar: Calendar = [];

  table?: GetTableReportResponse;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private userService: UserService,
  ) {
    this.formGroup = this.formBuilder.group({
      service: [null],
      month: [new Date()],
    });

    this.formGroup.valueChanges.subscribe(() => this.getTable());

    this.userService.getCurrentUser().subscribe((user: User) => {
      this.formGroup.patchValue({
        service: user.service,
      });
    });
  }

  async getTable(): Promise<void> {
    const queryParameters = {
      month: this.formGroup.get("month")!.value.getMonth() + 1,
      year: this.formGroup.get("month")!.value.getFullYear(),
      service: this.getServiceNumberByLabel(this.formGroup.get("service")!.value),
    };

    this.table = await firstValueFrom(this.apiService.get<GetTableReportResponse>(this.formAction, queryParameters));
    this.calendar = this.getCalendar();
  }

  private getCalendar(): Calendar {
    const month: number = this.formGroup.get("month")!.value.getMonth();
    const year: number = this.formGroup.get("month")!.value.getFullYear();
    const calendar: Calendar = [];

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    let currentWeek: (number | null)[] = [];

    const startingDay = firstDayOfMonth.getDay();

    firstDayOfMonth.setDate(firstDayOfMonth.getDate() - startingDay + 1);

    const currentDay = new Date(firstDayOfMonth);

    while (currentDay <= lastDayOfMonth) {
      if (currentDay.getMonth() === month) {
        currentWeek.push(currentDay.getDate());
      } else {
        currentWeek.push(null);
      }

      if (
        currentDay.getDay() === 0 &&
        currentDay.getDate() !== lastDayOfMonth.getDate()
      ) {
        calendar.push(currentWeek);
        currentWeek = [];
      }

      currentDay.setDate(currentDay.getDate() + 1);
    }

    // Ajouter la dernière semaine si elle n'a pas encore été ajoutée
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      calendar.push(currentWeek);
    }

    return calendar;
  }

  private getServiceNumberByLabel(label: string): undefined|number {
    const serviceKeys = Object.keys(Service);

    for (let i = 0; i < serviceKeys.length; i++) {
      if (Service[serviceKeys[i] as keyof typeof Service] === label) {
        return i;
      }
    }

    return undefined;
  }
}