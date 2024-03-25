import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbsenceRequestError } from '../models/response-absence-request';
import { HttpMethod } from '../services/api.service';
import { DropdownForm } from '../models/dropdown-form';
import { RoutesPath } from '../models/route';

@Component({
  selector: 'app-absence-request-create',
  templateUrl: './absence-request-create.component.html',
  styleUrls: ['../pages/components/components.component.scss'],
})
export class AbsenceRequestCreateComponent {
  formErrors: AbsenceRequestError = {};

  formMethod: HttpMethod = HttpMethod.POST;

  formAction: string = '/absence-requests';

  formGroup!: FormGroup;

  redirect: string = RoutesPath.ROUTE_USER_ABSENCE_REQUESTS;

  absenceTypes: DropdownForm[] = [
    { label: 'Férié', value: "PUBLIC_HOLIDAY" },
    { label: 'Congé payé', value: "PAID_LEAVE" },
    { label: 'Congé sans solde', value: "UNPAID_LEAVE" },
    { label: 'Jour de récupération', value: "TOIL_DAY" },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      startedAt: ['', Validators.required],
      endedAt: ['', Validators.required],
      type: [null, Validators.required],
      reason: ['', Validators.maxLength(255)],
    });
  }
}
