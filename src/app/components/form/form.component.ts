import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, HttpMethod } from '../../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.module.scss',
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

  constructor(private router: Router, private apiService: ApiService) {}

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const formData = this.getFormData();
    const response = await this.apiService.request(
      this.action,
      this.method,
      formData
    );
    const json = await response.json();

    if (!response.ok) {
      for (const [key, value] of Object.entries(json)) {
        this.formGroup.get(key)?.setErrors({
          api: value,
        });
      }

      return;
    }

    if (!this.redirect) {
      return;
    }

    this.router.navigateByUrl(this.redirect);
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
