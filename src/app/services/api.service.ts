import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

const API_URL = 'http://localhost:8080/api';
const BASE_URL = API_URL;
export const AUTH_API = `${API_URL}/login`;
export const LOGOUT_API = `${API_URL}/logout`;
export const GET_USER_API = `${API_URL}/users/current`;
export const GET_ABSENCE_REQUESTS = `${API_URL}/absence-requests`;

export enum ApiRoute {
  ABSENCE_REQUEST = "/absence-requests",
  ABSENCE_REQUEST_MANAGER = "/absence-requests/manager",
  ABSENCE_REQUEST_APPROVE = "/absence-requests/approve",
  ABSENCE_REQUEST_REJECT = "/absence-requests/reject",
  GET_ABSENCE_REQUEST_HISTOGRAM = "/absence-requests/histogram",
  PUBLIC_HOLIDAY = "/public-holidays",
  EMPLOYER_WTR = "/employer-wtr",
  GET_CURRENT_USER = "/users/current",
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  request(endpoint: string, method: HttpMethod, body?: FormData): Observable<any> {
    return this.http
      .request(method, `${BASE_URL}${endpoint}`, {
        body,
        responseType: "json",
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

  get<T>(endpoint: string): Observable<T> {
    return this.request(endpoint, HttpMethod.GET);
  }
}