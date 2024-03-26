import { Component } from '@angular/core';
import { AbsenceRequest } from '../../../models/absence-request';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_ABSENCE_REQUESTS } from '../../../services/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-absence-request-list',
  templateUrl: './absence-request-list.component.html',
  styleUrl: './absence-request-list.component.scss',
  providers: [MessageService],
})
export class AbsenceRequestListComponent {
  absenceRequests: AbsenceRequest[] = [];
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getAbsenceRequests();
  }

  async getAbsenceRequests(): Promise<void> {
    this.absenceRequests = await firstValueFrom(
      this.http.get<Array<AbsenceRequest>>(GET_ABSENCE_REQUESTS)
    );
  }

  async deleteAbsenceRequest(absenceRequest: AbsenceRequest) {
    const deletedAbsenceRequest = this.http
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
      });
  }
}
