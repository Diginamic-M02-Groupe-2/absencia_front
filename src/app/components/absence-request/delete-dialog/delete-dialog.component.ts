import {Component, EventEmitter, Input, Output, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AbsenceRequest} from "../../../entities/absence-request";
import {ApiRoute, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrl: "./delete-dialog.component.module.scss",
})
export class AbsenceRequestDeleteDialogComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.DELETE;

  formAction: string = "";

  @Input()
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  absenceRequest?: AbsenceRequest;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    const absenceRequest = changes["absenceRequest"]?.currentValue as undefined|AbsenceRequest;

    if (!absenceRequest) {
      return;
    }

    this.absenceRequest = absenceRequest;
    this.formAction = `${ApiRoute.ABSENCE_REQUEST}/${this.absenceRequest.id ?? ""}`;
  }

  onClose(): void {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }
}