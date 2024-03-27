import {Component} from "@angular/core";
import {MessageService} from "primeng/api";
import {firstValueFrom} from "rxjs";
import {AbsenceRequest} from "../../../models/absence-request";
import {GetAbsenceRequestResponse} from "../../../models/get-absence-request-response";
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
  absenceRequests?: AbsenceRequest[];

  remainingPaidLeaves?: number;

  remainingEmployeeWtr?: number;

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