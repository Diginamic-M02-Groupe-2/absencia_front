import {Component, EventEmitter, Input, Output, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployerWtr} from "../../../entities/employer-wtr";
import {MessageResponse} from "../../../models/message-response";
import {Option} from "../../../models/option";
import {ApiRoute, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-employer-wtr-update-dialog",
  templateUrl: "./update-dialog.component.html",
  styleUrl: "./update-dialog.component.module.scss",
})
export class EmployerWtrUpdateDialogComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.PATCH;

  formAction: string = "";

  @Input()
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  employerWtr?: EmployerWtr;

  @Input()
  absenceTypeOptions!: Option[];

  @Output()
  onUpdate: EventEmitter<MessageResponse> = new EventEmitter<MessageResponse>();

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      date: [null, Validators.required],
      label: ["", [Validators.required, Validators.maxLength(255)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const employerWtr = changes["employerWtr"]?.currentValue as undefined|EmployerWtr;

    if (!employerWtr) {
      return;
    }

    this.employerWtr = employerWtr;
    this.formAction = `${ApiRoute.EMPLOYER_WTR}/${this.employerWtr?.id}`;
    this.formGroup.patchValue({
      date: new Date(this.employerWtr.date),
      label: this.employerWtr.label,
    });
  }

  onClose(): void {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }

  postSubmit(response: MessageResponse): void {
    this.onUpdate.emit(response);

    this.onClose();
  }
}