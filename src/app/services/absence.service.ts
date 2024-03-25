import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { GET_ABSENCE_REQUESTS } from './api.service';
import { AbsenceRequestCreate } from '../models/absence-request';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService {
  constructor(private http: HttpClient) {}

  createAbsenceRequest(
    request: AbsenceRequestCreate
  ): Observable<AbsenceRequestCreate> {
    const formData = new FormData();
    formData.append('startedAt', request.startedAt.toISOString());
    formData.append('endedAt', request.endedAt.toISOString());
    formData.append('type', request.type);
    formData.append('reason', request.reason);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http
      .post<AbsenceRequestCreate>(GET_ABSENCE_REQUESTS, formData, { headers })
      .pipe(
        catchError((error) => {
          if (error.status === 400 && error.error && error.error.message) {
            return throwError(() => new Error(error.error.message));
          } else {
            return throwError(() => error);
          }
        })
      );
  }
}
