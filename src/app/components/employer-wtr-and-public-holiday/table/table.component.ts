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

  editDialogVisible: boolean = false;

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

  isEmployerWtrEditable(employerWtr: EmployerWtr): boolean {
    return employerWtr.status === EmployerWtrStatus.INITIAL;
  }

  onClickUpdateButton(employerWtr: EmployerWtr): void {
    this.employerWtr = employerWtr;
    this.editDialogVisible = true;
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