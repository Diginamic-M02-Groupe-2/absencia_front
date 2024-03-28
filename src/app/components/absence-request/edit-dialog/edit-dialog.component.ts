import {Component, EventEmitter, Input, Output, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AbsenceRequest} from "../../../entities/absence-request";
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

  formAction: string = "";

  @Input()
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  absenceRequest?: AbsenceRequest;

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

  ngOnChanges(changes: SimpleChanges): void {
    const absenceRequest = changes["absenceRequest"]?.currentValue as undefined|AbsenceRequest;

    if (!absenceRequest) {
      return;
    }

    this.absenceRequest = absenceRequest;
    this.formAction = `${ApiRoute.ABSENCE_REQUEST}/${this.absenceRequest?.id ?? ""}`;
  }

  onClose(): void {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }
}