import {Component} from "@angular/core";
import {MessageService} from "primeng/api";
import {firstValueFrom} from "rxjs";
import {AbsenceRequest} from "../../../entities/absence-request";
import {GetAbsenceRequestResponse} from "../../../models/get-absence-request-response";
import {Route} from "../../../models/route";
import {ApiRoute, ApiService, HttpMethod} from "../../../services/api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Option } from "../../../models/option";

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

  isDialogVisible: boolean = false;

  absenceRequestNewRoute: string = `/${Route.ABSENCE_REQUEST_CREATE}`;

  absenceRequest: AbsenceRequest = new AbsenceRequest();

  remainingPaidLeaves: number = 0;

  remainingEmployeeWtr: number = 0;

  formMethod: HttpMethod = HttpMethod.PATCH;

  formAction: string = '/absence-requests';

  formGroup!: FormGroup;

  absenceTypeOptions: Option[] = [
    { label: 'Congé payé', value: 'PAID_LEAVE' },
    { label: 'Congé sans solde', value: 'UNPAID_LEAVE' },
    { label: 'Jour de récupération', value: 'EMPLOYEE_WTR' },
  ];

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      startedAt: ['', Validators.required],
      endedAt: ['', Validators.required],
      type: [null, Validators.required],
      reason: ['', Validators.maxLength(255)],
    });
    this.getAbsenceRequests();
  }

  async getAbsenceRequests(): Promise<void> {
    const response = await firstValueFrom(this.apiService.get<GetAbsenceRequestResponse>(ApiRoute.ABSENCE_REQUEST));

    this.absenceRequests = response.absenceRequests;
    this.remainingPaidLeaves = response.remainingPaidLeaves;
    this.remainingEmployeeWtr = response.remainingEmployeeWtr;
  }

  clearDialog(){
    this.formGroup.reset();
    this.isDialogVisible = false;
    this.getAbsenceRequests();
  }

  showDialog(isVisible: boolean){
    this.isDialogVisible = isVisible;
  }

  getAbsenceRequest(absenceRequest: AbsenceRequest){
    this.absenceRequest = absenceRequest;
  }

  getFormGroup(formGroup: FormGroup){
    this.formGroup = formGroup;
  }

  getFormAction(formAction: string){
    this.formAction = formAction;
  }

  getFormMethod(formMethod: HttpMethod){
    this.formMethod = formMethod;
    this.formMethod === HttpMethod.DELETE
      ? this.action = "Supprimer"
      : this.action = "Modifier"
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