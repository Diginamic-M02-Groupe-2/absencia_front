import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {AbsenceRequest} from "../../../entities/absence-request";
import {GetEmployeeAbsenceRequestResponse} from "../../../models/get-employee-absence-request-response";
import {ApiRoute, ApiService, HttpMethod} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrl: "./employee-table.component.module.scss",
})
export class AbsenceRequestEmployeeTableComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.PATCH;

  formAction: string = ApiRoute.ABSENCE_REQUEST;

  employees: GetEmployeeAbsenceRequestResponse = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {
    this.formGroup = this.formBuilder.group({});

    this.getEmployeeAbsenceRequests();
  }

  async getEmployeeAbsenceRequests(): Promise<void> {
    const response = await firstValueFrom(this.apiService.get<GetEmployeeAbsenceRequestResponse>(ApiRoute.ABSENCE_REQUEST_MANAGER));

    this.employees = response;
  }

  /**
   * @todo
   */
  postApprove(absenceRequest: AbsenceRequest): void {}

  /**
   * @todo
   */
  postReject(absenceRequest: AbsenceRequest): void {}
}