import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { Observable, catchError, throwError } from 'rxjs';

const API_URL = 'http://localhost:8080/api';
const BASE_URL = API_URL;
export const AUTH_API = `${API_URL}/login`;
export const LOGOUT_API = `${API_URL}/logout`;
export const GET_USER_API = `${API_URL}/users/current`;
export const GET_ABSENCE_REQUESTS = `${API_URL}/absence-requests`;

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthentificationService
  ) {}

  request(
    endpoint: string,
    method: HttpMethod,
    body?: FormData
  ): Observable<any> {
    if (!this.authenticationService.isUserConnected) {
      return throwError(() => new Error('User is logged out'));
    }

    return this.http
      .request(method, `${BASE_URL}${endpoint}`, {
        body,
        responseType: 'json',
      })
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
