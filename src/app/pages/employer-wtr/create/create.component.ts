import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {MessageResponse} from "../../../models/message-response";
import {Route} from "../../../models/route";
import {ApiRoute, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-employer-wtr-create",
  styleUrl: "./create.component.module.scss",
  templateUrl: "./create.component.html",
})
export class EmployerWtrCreateComponent {
  employerWtrAndPublicHolidayRead: string = `/${Route.EMPLOYER_WTR_AND_PUBLIC_HOLIDAY_READ}`;

  formGroup!: FormGroup;

  formMethod: HttpMethod = HttpMethod.POST;

  formAction: string = ApiRoute.EMPLOYER_WTR;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.formGroup = this.formBuilder.group({
      date: [null, Validators.required],
      label: ["", [Validators.required, Validators.maxLength(255)]],
    });
  }

  postSubmit(response: MessageResponse) {
    this.messageService.add({
      severity: "success",
      detail: response.message,
      life: 5000,
    });

    this.router.navigateByUrl(Route.EMPLOYER_WTR_AND_PUBLIC_HOLIDAY_READ);
  }
}