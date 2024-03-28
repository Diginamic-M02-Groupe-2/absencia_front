import {Component, Input} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiRoute, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrl: "./delete-dialog.component.module.scss",
})
export class AbsenceRequestDeleteDialogComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.DELETE;

  formAction: string = ApiRoute.ABSENCE_REQUEST;

  @Input()
  visible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  /**
   * @todo
   */
  closeDialog(): void {
    debugger;
  }
}