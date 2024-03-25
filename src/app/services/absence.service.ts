import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http
      .post<AbsenceRequestCreate>(GET_ABSENCE_REQUESTS, request)
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
