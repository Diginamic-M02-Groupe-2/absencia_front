import {Component, Input} from "@angular/core";
import {AbsenceRequest} from "../../../entities/absence-request";
import {absenceTypeOptions} from "../../../entities/absence-type";
import {Option} from "../../../models/option";
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

  absenceRequest?: AbsenceRequest;

  absenceTypeOptions: Option[] = absenceTypeOptions;

  editDialogVisible: boolean = false;

  deleteDialogVisible: boolean = false;

  onClickEditButton(absenceRequest: AbsenceRequest): void {
    this.absenceRequest = absenceRequest;
    this.editDialogVisible = true;
  }

  onClickDeleteButton(absenceRequest: AbsenceRequest): void {
    this.absenceRequest = absenceRequest;
    this.deleteDialogVisible = true;
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