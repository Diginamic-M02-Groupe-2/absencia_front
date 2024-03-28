import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbsenceRequest} from "../../../entities/absence-request";
import {HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.module.scss",
})
export class AbsenceRequestTableComponent {
  formMethod: HttpMethod = HttpMethod.PATCH;

  @Input()
  absenceRequests!: AbsenceRequest[];

  @Output()
  openEditDialog: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  openDeleteDialog: EventEmitter<void> = new EventEmitter<void>();

  onClickEditButton(): void {
    this.openEditDialog.emit();
  }

  onClickDeleteButton(): void {
    this.openDeleteDialog.emit();
  }

  /* async openAbsenceRequestDialog(
    method: string,
    absenceRequest?: AbsenceRequest
  ) {
    this.isDialogVisible = true;
    this.triggerDialog.emit(true);

    method === "PATCH"
      ? this.triggerFormMethod.emit(HttpMethod.PATCH)
      : this.triggerFormMethod.emit(HttpMethod.DELETE)

    if (absenceRequest) {
      this.formAction = `/absence-requests/${absenceRequest.id}`;
      this.triggerFormAction.emit(this.formAction);
      this.triggerAbsenceRequest.emit(absenceRequest);
      this.formGroup.patchValue({
        startedAt: new Date(absenceRequest.startedAt),
        endedAt: new Date(absenceRequest.endedAt),
        type: absenceRequest.type,
        reason: absenceRequest.reason,
      });
      this.triggerFormGroup.emit(this.formGroup);
    }
  } */
}