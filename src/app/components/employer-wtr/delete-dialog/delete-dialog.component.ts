import {Component, EventEmitter, Input, Output, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployerWtr} from "../../../entities/employer-wtr";
import {MessageResponse} from "../../../models/message-response";
import {ApiRoute, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-employer-wtr-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrl: "./delete-dialog.component.module.scss",
})
export class EmployerWtrDeleteDialogComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.DELETE;

  formAction: string = "";

  @Input()
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  employerWtr?: EmployerWtr;

  @Output()
  onDelete: EventEmitter<MessageResponse> = new EventEmitter<MessageResponse>();

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    const employerWtr = changes["employerWtr"]?.currentValue as undefined|EmployerWtr;

    if (!employerWtr) {
      return;
    }

    this.employerWtr = employerWtr;
    this.formAction = `${ApiRoute.EMPLOYER_WTR}/${this.employerWtr.id}`;
  }

  onClose(): void {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }

  postSubmit(response: MessageResponse): void {
    this.onDelete.emit(response);

    this.onClose();
  }
}