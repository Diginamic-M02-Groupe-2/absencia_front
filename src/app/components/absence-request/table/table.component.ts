import {Component, Input} from "@angular/core";
import {MessageService} from "primeng/api";
import {AbsenceRequest} from "../../../entities/absence-request";
import {AbsenceRequestStatus} from "../../../entities/absence-request-status";
import {absenceTypeOptions} from "../../../entities/absence-type";
import {MessageResponse} from "../../../models/message-response";
import {Option} from "../../../models/option";

@Component({
  selector: "app-absence-request-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.module.scss",
})
export class AbsenceRequestTableComponent {
  @Input()
  absenceRequests!: AbsenceRequest[];

  absenceRequest?: AbsenceRequest;

  absenceTypeOptions: Option[] = absenceTypeOptions;

  editDialogVisible: boolean = false;

  deleteDialogVisible: boolean = false;

  constructor(
    private messageService: MessageService,
  ) {}

  isStatusEditable(absenceRequest: AbsenceRequest) {
    return !(absenceRequest.status === AbsenceRequestStatus.APPROVED || absenceRequest.status === AbsenceRequestStatus.PENDING);
  }

  onClickEditButton(absenceRequest: AbsenceRequest): void {
    this.absenceRequest = absenceRequest;
    this.editDialogVisible = true;
  }

  onClickDeleteButton(absenceRequest: AbsenceRequest): void {
    this.absenceRequest = absenceRequest;
    this.deleteDialogVisible = true;
  }

  onEdit(response: MessageResponse): void {
    this.messageService.add({
      severity: "success",
      detail: response.message,
      life: 5000,
    });
  }

  onDelete(response: MessageResponse): void {
    this.messageService.add({
      severity: "success",
      detail: response.message,
      life: 5000,
    });
  }
}