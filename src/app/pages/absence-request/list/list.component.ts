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

  action: string = "Modifier";

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

  /**
   * @todo Utiliser app-form?
   */
  async deleteAbsenceRequest(absenceRequest: AbsenceRequest): Promise<void> {
    /* const deletedAbsenceRequest = this.http
      .delete<any>(`${GET_ABSENCE_REQUESTS}/${absenceRequest.id}`)
      .pipe(
        catchError((error) => {
          if (error.status === 400 && error.error && error.error.message) {
            return throwError(() => new Error(error.error.message));
          } else {
            return throwError(() => error);
          }
        })
      );

    deletedAbsenceRequest
      .pipe(
        catchError((error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Suppression',
            detail: error,
            life: 5000,
          });
          return throwError(() => error);
        })
      )
      .subscribe((response: { message: string }) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Suppression',
          detail: response.message,
          life: 5000,
        });
        this.getAbsenceRequests();
      }); */
  }
}