import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbsenceRequest} from "../../../entities/absence-request";
import {absenceTypeOptions} from "../../../entities/absence-type";
import {Option} from "../../../models/option";
import { AbsenceRequestStatus } from "../../../entities/absence-request-status";

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

  @Output()
  onLoadData: EventEmitter<void> = new EventEmitter<void>();

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

  onEdit(): void {
    this.onLoadData.emit();
  }
}