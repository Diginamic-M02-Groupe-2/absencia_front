import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {absenceTypeOptions} from "../../../entities/absence-type";
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

  redirect: string = Route.ABSENCE_REQUEST_LIST;

  absenceTypes: Option[] = absenceTypeOptions;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      startedAt: [null, Validators.required],
      endedAt: [null, Validators.required],
      type: [null, Validators.required],
      reason: ["", Validators.maxLength(255)],
    });
  }
}