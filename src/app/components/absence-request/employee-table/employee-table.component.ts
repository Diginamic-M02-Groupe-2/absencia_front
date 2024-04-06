import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";
import {firstValueFrom} from "rxjs";
import {AbsenceRequest} from "../../../entities/absence-request";
import {GetEmployeeAbsenceRequestResponse} from "../../../models/get-employee-absence-request-response";
import {ApiRoute, ApiService, HttpMethod} from "../../../services/api.service";
import { MessageResponse } from "../../../models/message-response";

@Component({
  selector: "app-absence-request-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrl: "./employee-table.component.module.scss",
  providers: [
    MessageService,
  ],
})
export class AbsenceRequestEmployeeTableComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.PATCH;

  formAction: string = ApiRoute.ABSENCE_REQUEST;

  employees: GetEmployeeAbsenceRequestResponse = [];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService,
  ) {
    this.formGroup = this.formBuilder.group({});

    this.getEmployeeAbsenceRequests();
  }

  async getEmployeeAbsenceRequests(): Promise<void> {
    const response = await firstValueFrom(this.apiService.get<GetEmployeeAbsenceRequestResponse>(ApiRoute.ABSENCE_REQUEST_MANAGER));

    this.employees = response;
  }

  isEmpty(): boolean {
    return this.employees.every(employee => !employee.absenceRequests.length);
  }

  postApproveOrReject(response: MessageResponse): void {
    this.messageService.add({
      severity: "success",
      detail: response.message,
      life: 5000,
    });

    this.getEmployeeAbsenceRequests();
  }
}