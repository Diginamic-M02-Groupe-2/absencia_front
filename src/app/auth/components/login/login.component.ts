import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Route } from '../../../models/route';
import { ResponseLoginError } from '../../../models/response-login-error';
import { AuthentificationService } from '../../../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formGroup: FormGroup;

  formErrors: ResponseLoginError = {};

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {
    this.formGroup = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
  }

  async onLogin(event: Event): Promise<boolean> {
    event.preventDefault();
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return false;
    }

    try {
      const formData = this.getFormData();
      const isUserConnected = await this.authentificationService.logIn(
        formData
      );

      if (isUserConnected !== true) {
        this.formErrors = isUserConnected as ResponseLoginError;
        return false;
      }

      this.router.navigateByUrl(Route.ABSENCE_REQUEST_LIST);
      return true;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
      return false;
    }
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
