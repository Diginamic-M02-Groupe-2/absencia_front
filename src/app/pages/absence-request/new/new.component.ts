import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AbsenceType, absenceTypeOptions} from "../../../models/absence";
import {Option} from "../../../models/option";
import {Route} from "../../../models/route";
import {HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-new",
  templateUrl: "./new.component.html",
})
export class AbsenceRequestNewComponent {
  formMethod: HttpMethod = HttpMethod.POST;

  formAction: string = "/absence-requests";

  formGroup!: FormGroup;

  redirect: string = Route.ABSENCE_REQUEST_LIST;

  absenceTypes: any = /* [
    { label: 'Férié', value: AbsenceType.PUBLIC_HOLIDAY.toString() },
    { label: 'Congé payé', value: "PAID_LEAVE" },
    { label: 'Congé sans solde', value: "UNPAID_LEAVE" },
    { label: 'Jour de récupération', value: "TOIL_DAY" },
  ]; */
  absenceTypeOptions;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      startedAt: ['', Validators.required],
      endedAt: ['', Validators.required],
      type: [null, Validators.required],
      reason: ['', Validators.maxLength(255)],
    });
  }

  clearInputs(): void {
    this.formGroup.reset();
  }
}