import {Component, Input} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Option} from "../../../models/option";
import {ApiRoute, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrl: "./edit-dialog.component.module.scss",
})
export class AbsenceRequestEditDialogComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.PATCH;

  formAction: string = ApiRoute.ABSENCE_REQUEST;

  @Input()
  absenceTypeOptions!: Option[];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      startedAt: [null, Validators.required],
      endedAt: [null, Validators.required],
      type: [null, Validators.required],
      reason: ["", Validators.maxLength(255)],
    });
  }

  /**
   * @todo
   */
  closeDialog(): void {
    debugger;
  }
}