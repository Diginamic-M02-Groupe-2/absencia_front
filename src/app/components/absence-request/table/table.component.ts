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

  onEdit(absenceRequest: AbsenceRequest): void {
    const index = this.absenceRequests.findIndex(item => item.id === absenceRequest.id);

    this.absenceRequests[index] = absenceRequest;
  }

  onDelete(absenceRequest: AbsenceRequest): void {
    const index = this.absenceRequests.findIndex(item => item.id === absenceRequest.id);

    this.absenceRequests.splice(index, 1);
  }
}