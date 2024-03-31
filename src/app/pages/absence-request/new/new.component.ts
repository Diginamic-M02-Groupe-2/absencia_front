import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {absenceTypeOptions} from "../../../entities/absence-type";
import {MessageResponse} from "../../../models/message-response";
import {Option} from "../../../models/option";
import {Route} from "../../../models/route";
import {HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-new",
  styleUrl: "./new.component.module.scss",
  templateUrl: "./new.component.html",
})
export class AbsenceRequestNewComponent {
  formMethod: HttpMethod = HttpMethod.POST;

  formAction: string = "/absence-requests";

  formGroup!: FormGroup;

  absenceTypes: Option[] = absenceTypeOptions;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.formGroup = this.formBuilder.group({
      startedAt: [null, Validators.required],
      endedAt: [null, Validators.required],
      type: [null, Validators.required],
      reason: ["", Validators.maxLength(255)],
    });
  }

  postSubmit(response: MessageResponse) {
    this.router.navigateByUrl(Route.ABSENCE_REQUEST_LIST);
    this.messageService.add({
      severity: "success",
      detail: response.message,
      life: 5000,
    });
  }
}