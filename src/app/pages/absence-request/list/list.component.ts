import {Component} from "@angular/core";
import {MessageService} from "primeng/api";
import {firstValueFrom} from "rxjs";
import {AbsenceRequest} from "../../../entities/absence-request";
import {absenceTypeOptions} from "../../../entities/absence-type";
import {GetAbsenceRequestResponse} from "../../../models/get-absence-request-response";
import {Option} from "../../../models/option";
import {Route} from "../../../models/route";
import {ApiRoute, ApiService} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-list",
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.module.scss",
  providers: [
    MessageService,
  ],
})
export class AbsenceRequestListComponent {
  absenceRequests: AbsenceRequest[] = [];

  absenceRequestNewRoute: string = `/${Route.ABSENCE_REQUEST_CREATE}`;

  absenceRequest: AbsenceRequest = new AbsenceRequest();

  remainingPaidLeaves: number = 0;

  remainingEmployeeWtr: number = 0;

  absenceTypeOptions: Option[] = absenceTypeOptions;

  editDialogVisible: boolean = false;

  deleteDialogVisible: boolean = false;

  constructor(
    private apiService: ApiService,
  ) {
    this.getAbsenceRequests();
  }

  async getAbsenceRequests(): Promise<void> {
    const response = await firstValueFrom(this.apiService.get<GetAbsenceRequestResponse>(ApiRoute.ABSENCE_REQUEST));

    this.absenceRequests = response.absenceRequests;
    this.remainingPaidLeaves = response.remainingPaidLeaves;
    this.remainingEmployeeWtr = response.remainingEmployeeWtr;
  }

  clearDialog() {
    this.getAbsenceRequests();
  }

  openEditDialog(): void {
    this.editDialogVisible = true;
  }

  openDeleteDialog(): void {
    this.deleteDialogVisible = true;
  }

  getAbsenceRequest(absenceRequest: AbsenceRequest) {
    this.absenceRequest = absenceRequest;
  }
}