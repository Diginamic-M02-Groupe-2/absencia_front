import {Component, EventEmitter, Input, Output} from "@angular/core";
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
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  onClose(): void {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }
}