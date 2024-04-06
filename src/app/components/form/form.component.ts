import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";
import {catchError, throwError} from "rxjs";
import {MessageResponse} from "../../models/message-response";
import {ApiService, HttpMethod} from "../../services/api.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.module.scss",
  providers: [
    MessageService,
  ],
})
export class FormComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  method!: HttpMethod;

  @Input()
  action!: string;

  @Output()
  postSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    this.formGroup.markAllAsTouched();

    const formData = this.getFormData();

    this.apiService
      .request(this.action, this.method, formData)
      .pipe(
        catchError((error) => {
          for (const [key, value] of Object.entries(error.error)) {
            const control = this.formGroup.get(key);

            control!.markAsTouched();
            control!.setErrors({
              api: value,
            });
          }

          return throwError(() => error);
        })
      )
      .subscribe((response: MessageResponse) => {
        this.messageService.add({
          severity: "success",
          detail: response.message,
          life: 5000,
        });

        if (!this.postSubmit) {
          return;
        }

        this.postSubmit.emit(response);
      });
  }

  private getFormData(): FormData {
    const formData = new FormData();

    for (const [key, control] of Object.entries(this.formGroup.controls)) {
      if (!control.value) {
        continue;
      }

      if (control.value instanceof Date) {
        const timezoneOffset = control.value.getTimezoneOffset() * 60000;
        const date = new Date(control.value.getTime() - timezoneOffset);
        const isoString = date.toISOString().split("T")[0];

        formData.append(key, isoString);

        continue;
      }

      formData.append(key, control.value);
    }

    return formData;
  }
}
