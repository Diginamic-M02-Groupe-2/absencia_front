import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AbsenceRequest} from "../../../entities/absence-request";
import { FormGroup } from "@angular/forms";
import { HttpMethod } from "../../../services/api.service";

@Component({
  selector: "app-absence-request-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
})
export class AbsenceRequestTableComponent {

  formMethod: HttpMethod = HttpMethod.PATCH;

  @Input()
  absenceRequests!: AbsenceRequest[];

  @Input()
  isDialogVisible: boolean = false;

  @Input()
  formAction: string = '/absence-requests';

  @Input()
  formGroup!: FormGroup;

  @Output()
  triggerDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  triggerAbsenceRequest: EventEmitter<AbsenceRequest> = new EventEmitter<AbsenceRequest>();

  @Output()
  triggerFormAction: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  triggerFormGroup: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  @Output()
  triggerFormMethod: EventEmitter<HttpMethod> = new EventEmitter<HttpMethod>();

  async openAbsenceRequestDialog(
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
  }
}