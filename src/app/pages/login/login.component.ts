import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Route} from "../../models/route";
import {LoginResponse} from "../../models/login-response";
import {ApiRoute, HttpMethod} from "../../services/api.service";
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.module.scss",
})
export class LoginComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.POST;

  formAction: string = ApiRoute.LOGIN;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthentificationService,
  ) {
    this.formGroup = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  async onPostSubmit(response: LoginResponse): Promise<void> {
    await this.authenticationService.createSession(response.token);

    this.router.navigateByUrl(Route.ABSENCE_REQUEST_LIST);
  }
}