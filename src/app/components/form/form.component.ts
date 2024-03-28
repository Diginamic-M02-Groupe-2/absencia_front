import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, HttpMethod } from '../../services/api.service';
import { catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.module.scss',
  providers: [MessageService],
})
export class FormComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  method!: HttpMethod;

  @Input()
  action!: string;

  @Input()
  redirect?: string;

  @Output()
  postSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const formData = this.getFormData();

    this.apiService
      .request(this.action, this.method, formData)
      .pipe(
        catchError((error) => {
          for (const [key, value] of Object.entries(error.error)) {
            this.formGroup.get(key)?.setErrors({
              api: value,
            });
          }

          return throwError(() => error);
        })
      )
      .subscribe((response: { message: string }) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Action validée',
          detail: response.message,
          life: 5000,
        });

        if (this.postSubmit) {
          this.postSubmit.emit(response);
        } else if (this.redirect) {
          this.router.navigateByUrl(this.redirect);
        }
      });
  }

  private getFormData(): FormData {
    const formData = new FormData();

    for (const [key, control] of Object.entries(this.formGroup.controls)) {
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
