import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ApiService, HttpMethod} from "../../services/api.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.module.scss",
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
    private apiService: ApiService,
  ) {}

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await this.apiService.request(this.action, this.method, formData);
    const json = await response.json();

    if (!response.ok) {
      for (const [key, value] of Object.entries(json)) {
        console.log(key, value);

        this.formGroup.get(key)?.setErrors({
          serverError: value,
        });
      }

      return;
    }

    // Redirect
  }
}