import {Component, EventEmitter, Input, Output, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PublicHoliday} from "../../../entities/public-holiday";
import {MessageResponse} from "../../../models/message-response";
import {Option} from "../../../models/option";
import {ApiRoute, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-public-holiday-update-dialog",
  templateUrl: "./update-dialog.component.html",
  styleUrl: "./update-dialog.component.module.scss",
})
export class PublicHolidayUpdateDialogComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.PATCH;

  formAction: string = "";

  @Input()
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  publicHoliday?: PublicHoliday;

  @Input()
  absenceTypeOptions!: Option[];

  @Output()
  onUpdate: EventEmitter<MessageResponse> = new EventEmitter<MessageResponse>();

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      worked: [false, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const publicHoliday = changes["publicHoliday"]?.currentValue as undefined|PublicHoliday;

    if (!publicHoliday) {
      return;
    }

    this.publicHoliday = publicHoliday;
    this.formAction = `${ApiRoute.PUBLIC_HOLIDAY}/${this.publicHoliday?.id}`;
    this.formGroup.patchValue({
      worked: this.publicHoliday.worked,
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