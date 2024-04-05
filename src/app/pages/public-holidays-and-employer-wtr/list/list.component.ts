import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { EmployerWtr } from '../../../entities/employer-wtr';
import { PublicHoliday } from '../../../entities/public-holiday';
import { ApiRoute, ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Service } from '../../../entities/user/service';
import { AbsenceRequest } from '../../../entities/absence-request';

@Component({
  selector: 'app-public-holidays-and-employer-wtr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.module.scss'],
})
export class PublicHolidaysAndEmployerWtrListComponent {
  weekDays: string[] = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  currentDate: Date = new Date();

  calendar: (number | null)[][] = [];

  publicHolidays: PublicHoliday[] = [];

  data: {
    employerWtr: EmployerWtr[];
    absenceRequests: AbsenceRequest[];
    remainingPaidLeaves: number;
    remainingEmployeeWtr: number;
  } = {
    employerWtr: [],
    absenceRequests: [],
    remainingPaidLeaves: 0,
    remainingEmployeeWtr: 0,
  };

  year: number = new Date().getFullYear();

  isDialogVisible: boolean = false;

  currentPublicHoliday: PublicHoliday = new PublicHoliday();

  formGroup: FormGroup;

  service: Service = Service.DEVELOPMENT;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.formGroup = this.formBuilder.group({
      period: [new Date(), [Validators.required]],
    });
    this.userService.getCurrentUser().subscribe(async (user) => {
      this.service = user.service;
      this.getPublicHolidays();
      this.getEmployerWtrAndAbsenceRequest();
      this.generateCalendar();
    });
  }

  async getPublicHolidays(): Promise<void> {
    const url = `${ApiRoute.PUBLIC_HOLIDAY}/${this.year}`;

    this.publicHolidays = await firstValueFrom(
      this.apiService.get<PublicHoliday[]>(url)
    );
  }

  async getEmployerWtrAndAbsenceRequest(): Promise<void> {
    const serviceNumber = this.getServiceNumberByLabel(this.service);
    const date = new Date();
    const queryParams = {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      service: serviceNumber,
    };

    this.data = await firstValueFrom(
      this.apiService.get<{
        employerWtr: EmployerWtr[];
        absenceRequests: AbsenceRequest[];
        remainingPaidLeaves: number;
        remainingEmployeeWtr: number;
      }>(`${ApiRoute.PLANNING}`, queryParams)
    );
  }

  onDateChanged() {
    this.currentDate = new Date(this.formGroup.value.period);
    this.generateCalendar();
  }

  generateCalendar(): void {
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

  getPublicHolidayName(day: number | null): string | null {
    if (day === null) {
      return null;
    }
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const date = new Date(currentYear, currentMonth, day);

    const publicHoliday = this.publicHolidays.find((holiday) => {
      const holidayDate = new Date(holiday.date);
      return (
        date.getFullYear() === holidayDate.getFullYear() &&
        date.getMonth() === holidayDate.getMonth() &&
        date.getDate() === holidayDate.getDate()
      );
    });
    return publicHoliday ? publicHoliday.label : null;
  }

  isWeekend(day: number | null): boolean {
    if (day === null) {
      return false;
    }
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  isPublicHoliday(day: number | null): boolean {
    if (day === null) {
      return false;
    }

    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const date = new Date(currentYear, currentMonth, day);

    // Vérifier si la date correspond à un jour férié dans votre liste `publicHolidays`
    return this.publicHolidays.some((holiday) => {
      // Convertir la date du jour férié en objet Date
      const holidayDate = new Date(holiday.date);
      // Comparer les années, mois et jours des dates
      return (
        date.getFullYear() === holidayDate.getFullYear() &&
        date.getMonth() === holidayDate.getMonth() &&
        date.getDate() === holidayDate.getDate()
      );
    });
  }

  isEmployerWtrDay(day: number | null): boolean {
    if (day === null) {
      return false;
    }

    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const date = new Date(currentYear, currentMonth, day);

    return this.data.employerWtr.some((wtr) => {
      const wtrDate = new Date(wtr.date);
      return (
        date.getFullYear() === wtrDate.getFullYear() &&
        date.getMonth() === wtrDate.getMonth() &&
        date.getDate() === wtrDate.getDate()
      );
    });
  }

  isAbsenceDay(day: number | null): boolean {
    if (day === null) {
      return false;
    }

    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const date = new Date(currentYear, currentMonth, day);

    return this.data.absenceRequests.some((abs) => {
      const wtrDate = new Date(abs.startedAt);
      return (
        date.getFullYear() === wtrDate.getFullYear() &&
        date.getMonth() === wtrDate.getMonth() &&
        date.getDate() === wtrDate.getDate()
      );
    });
  }

  onClickEditButton(day: number | null): void {
    if (day === null) {
      return;
    }

    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const date = new Date(currentYear, currentMonth, day);

    // Rechercher le jour férié dans votre liste `publicHolidays`
    const holiday = this.publicHolidays.find((holiday) => {
      const holidayDate = new Date(holiday.date);
      return (
        date.getFullYear() === holidayDate.getFullYear() &&
        date.getMonth() === holidayDate.getMonth() &&
        date.getDate() === holidayDate.getDate()
      );
    });

    if (!holiday) {
      return;
    }

    this.currentPublicHoliday = holiday;
    this.isDialogVisible = true;
  }

  getServiceNumberByLabel(label: string): number | undefined {
    const serviceKeys = Object.keys(Service);
    for (let i = 0; i < serviceKeys.length; i++) {
      if (Service[serviceKeys[i] as keyof typeof Service] === label) {
        return i;
      }
    }
    return undefined;
  }
}
