import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MessageService} from "primeng/api";
import {EmployerWtr} from "../../../entities/employer-wtr";
import {EmployerWtrStatus} from "../../../entities/employer-wtr-status";
import {PublicHoliday} from "../../../entities/public-holiday";
import {MessageResponse} from "../../../models/message-response";

@Component({
  selector: "app-employer-wtr-and-public-holiday-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.module.scss",
})
export class EmployerWtrAndPublicHolidayTableComponent {
  employerWtr?: EmployerWtr;

  updateDialogVisible: boolean = false;

  deleteDialogVisible: boolean = false;

  @Input()
  employerWtrAndPublicHolidays!: (EmployerWtr|PublicHoliday)[];

  @Output()
  onLoad: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private messageService: MessageService,
  ) {}

  getWeekDay(date: Date): string {
    return new Date(date).toLocaleDateString("fr-FR", {weekday: "long"});
  }

  getType(employerWtrOrPublicHoliday: EmployerWtr|PublicHoliday): string {
    return this.isEmployerWtr(employerWtrOrPublicHoliday) ? "RTT employeur" : "Jour férié";
  }

  isEmployerWtr(employerWtrOrPublicHoliday: EmployerWtr|PublicHoliday): boolean {
    return "status" in employerWtrOrPublicHoliday;
  }

  isUpdatable(employerWtrOrPublicHoliday: EmployerWtr|PublicHoliday): boolean {
    if (new Date(employerWtrOrPublicHoliday.date).getTime() < new Date().getTime()) {
      return false;
    }

    if (this.isEmployerWtr(employerWtrOrPublicHoliday)) {
      const employerWtr = employerWtrOrPublicHoliday as EmployerWtr;

      return employerWtr.status === EmployerWtrStatus.INITIAL;
    }

    return true;
  }

  isDeletable(employerWtrOrPublicHoliday: EmployerWtr|PublicHoliday): boolean {
    if (new Date(employerWtrOrPublicHoliday.date).getTime() < new Date().getTime()) {
      return false;
    }

    if (!this.isEmployerWtr(employerWtrOrPublicHoliday)) {
      return false;
    }

    return true;
  }

  onClickUpdateButton(employerWtr: EmployerWtr): void {
    this.employerWtr = employerWtr;
    this.updateDialogVisible = true;
  }

  onClickDeleteButton(employerWtr: EmployerWtr): void {
    this.employerWtr = employerWtr;
    this.deleteDialogVisible = true;
  }

  onUpdate(response: MessageResponse): void {
    this.onLoad.emit();

    this.messageService.add({
      severity: "success",
      detail: response.message,
      life: 5000,
    });
  }

  onDelete(response: MessageResponse): void {
    this.onLoad.emit();

    this.messageService.add({
      severity: "success",
      detail: response.message,
      life: 5000,
    });
  }
}