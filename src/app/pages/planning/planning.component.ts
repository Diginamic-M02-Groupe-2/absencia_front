import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {PublicHoliday} from "../../entities/public-holiday";
import {User} from "../../entities/user/user";
import {Service} from "../../entities/user/service";
import {GetPlanningReportResponse} from "../../models/get-planning-report-response";
import {ApiRoute, ApiService} from "../../services/api.service";
import {UserService} from "../../services/user.service";
import { AbsenceRequest } from "../../entities/absence-request";
import { EmployerWtr } from "../../entities/employer-wtr";

@Component({
  selector: "app-absence-request-planning",
  templateUrl: "./planning.component.html",
  styleUrl: "./planning.component.module.scss",
})
export class PlanningComponent {
  weekDays: string[] = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  currentDate: Date = new Date();

  calendar: (number | null)[][] = [];

  data: GetPlanningReportResponse = {
    absenceRequests: [],
    employerWtr: [],
    publicHolidays: [],
    remainingPaidLeaves: 0,
    remainingEmployeeWtr: 0,
  };

  year: number = new Date().getFullYear();

  formGroup: FormGroup;

  service: Service = Service.DEVELOPMENT;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.formGroup = this.formBuilder.group({
      month: [new Date()],
    });

    this.formGroup.get("month")!.valueChanges.subscribe((value: Date) => this.onChangeMonth(value));

    this.userService.getCurrentUser().subscribe(async (user: User) => {
      this.service = user.service;

      this.getPlanning();
      this.generateCalendar();
    });
  }

  async getPlanning(): Promise<void> {
    const serviceNumber = this.getServiceNumberByLabel(this.service);
    const queryParams = {
      month: this.currentDate.getMonth() + 1,
      year: this.currentDate.getFullYear(),
      service: serviceNumber,
    };

    this.data = await firstValueFrom(
      this.apiService.get<GetPlanningReportResponse>(`${ApiRoute.REPORT_PLANNING}`, queryParams)
    );
  }

  async onChangeMonth(value: Date) {
    this.currentDate = value;

    await this.getPlanning();

    this.generateCalendar();
  }

  isAbsenceRequest(day: null|number): boolean {
    if (day === null) {
      return false;
    }

    return this.getAbsenceRequest(day) !== undefined;
  }

  isEmployerWtr(day: null|number): boolean {
    if (day === null) {
      return false;
    }

    return this.getEmployerWtr(day) !== undefined;
  }

  isNone(day: null|number): boolean {
    if (day === null) {
      return false;
    }

    return (
      !this.isAbsenceRequest(day) &&
      !this.isEmployerWtr(day) &&
      !this.isPublicHoliday(day) &&
      !this.isWeekEnd(day)
    );
  }

  isPublicHoliday(day: null|number): boolean {
    if (day === null) {
      return false;
    }

    return this.getPublicHoliday(day) !== undefined;
  }

  isWeekEnd(day: null|number): boolean {
    if (day === null) {
      return false;
    }

    const dayOfWeek = this.getCurrentDate(day).getDay();

    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  getAbsenceRequest(day: number): undefined|AbsenceRequest {
    const date = this.getCurrentDate(day);

    return this.data.absenceRequests.find((absenceRequest: AbsenceRequest) => {
      const absenceRequestStartedAt = new Date(absenceRequest.startedAt);
      const absenceRequestEndedAt = new Date(absenceRequest.endedAt);

      return (
        date.getTime() >= absenceRequestStartedAt.getTime() &&
        date.getTime() <= absenceRequestEndedAt.getTime()
      );
    });
  }

  getEmployerWtr(day: number): undefined|EmployerWtr {
    const date = this.getCurrentDate(day);

    return this.data.employerWtr.find((employerWtr: EmployerWtr) => {
      const employerWtrDate = new Date(employerWtr.date);

      return employerWtrDate.getTime() === date.getTime();
    });
  }

  getPublicHoliday(day: number): undefined|PublicHoliday {
    const date = this.getCurrentDate(day);

    return this.data.publicHolidays.find((publicHoliday: PublicHoliday) => {
      const publicHolidayDate = new Date(publicHoliday.date);

      return publicHolidayDate.getTime() === date.getTime();
    });
  }

  private generateCalendar(): void {
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    this.calendar = [];

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    let currentWeek: (number | null)[] = [];

    const startingDay = firstDayOfMonth.getDay();

    firstDayOfMonth.setDate(firstDayOfMonth.getDate() - startingDay + 1);

    const currentDay = new Date(firstDayOfMonth);

    while (currentDay <= lastDayOfMonth) {
      if (currentDay.getMonth() === currentMonth) {
        currentWeek.push(currentDay.getDate());
      } else {
        currentWeek.push(null);
      }

      if (
        currentDay.getDay() === 0 &&
        currentDay.getDate() !== lastDayOfMonth.getDate()
      ) {
        this.calendar.push(currentWeek);
        currentWeek = [];
      }

      currentDay.setDate(currentDay.getDate() + 1);
    }

    // Ajouter la dernière semaine si elle n'a pas encore été ajoutée
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      this.calendar.push(currentWeek);
    }
  }

  /**
   * Returns a date created from the day of the month, without the timezone offset
   */
  private getCurrentDate(day: number): Date {
    const date = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      day,
    );

    return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  }

  private getServiceNumberByLabel(label: string): number | undefined {
    const serviceKeys = Object.keys(Service);
    for (let i = 0; i < serviceKeys.length; i++) {
      if (Service[serviceKeys[i] as keyof typeof Service] === label) {
        return i;
      }
    }
    return undefined;
  }
}