import { Component, Input } from '@angular/core';
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

  constructor(
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Champs vides ou invalides',
        detail: 'Vérifiez les champs.',
        life: 5000,
      });

      return;
    }

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
          this.messageService.add({
            severity: 'error',
            summary: 'Champs invalides',
            detail: 'Vérifiez les champs.',
            life: 5000,
          });
          return throwError(() => error);
        })
      )
      .subscribe((response: { message: string }) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Action validée',
          detail: 'L action effectuée a été validée',
          life: 5000,
        });
        if (!this.redirect) {
          return;
        }
        this.router.navigateByUrl(this.redirect);
      });
  }

  private getFormData(): FormData {
    const formData = new FormData();

    for (const [key, control] of Object.entries(this.formGroup.controls)) {
      control.value instanceof Date
        ? formData.append(key, (control.value as Date).toJSON())
        : formData.append(key, control.value);
    }

    return formData;
  }
}
