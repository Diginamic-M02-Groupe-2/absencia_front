import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

const API_URL = 'http://localhost:8080/api';
const BASE_URL = API_URL;
export const AUTH_API = `${API_URL}/login`;
export const GET_USER_API = `${API_URL}/users/current`;
export const GET_ABSENCE_REQUESTS = `${API_URL}/absence-requests`;

export enum ApiRoute {
  // Authentication
  LOGIN = "/login",
  LOGOUT = "/logout",
  // Absence request
  ABSENCE_REQUEST = "/absence-requests",
  ABSENCE_REQUEST_MANAGER = "/absence-requests/manager",
  ABSENCE_REQUEST_APPROVE = "/absence-requests/approve",
  ABSENCE_REQUEST_REJECT = "/absence-requests/reject",
  // Employer WTR and public holiday
  GET_EMPLOYER_WTR_AND_PUBLIC_HOLIDAYS = "/employer-wtr-and-public-holidays",
  // Employer WTR
  EMPLOYER_WTR = "/employer-wtr",
  // Report
  REPORT_PLANNING = "/reports/planning",
  REPORT_HISTOGRAM = "/reports/histogram",
  // Public holiday
  PUBLIC_HOLIDAY = "/public-holidays",
  // Report
  // User
  GET_CURRENT_USER = "/users/current",
}

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
  constructor(private http: HttpClient) {}

  request(
    endpoint: string,
    method: HttpMethod,
    body?: FormData,
    queryParams?: any
  ): Observable<any> {
    let params = new HttpParams();
    if (queryParams) {
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty(key)) {
          params = params.append(key, queryParams[key]);
        }
      }
    }
    return this.http
      .request(method, `${BASE_URL}${endpoint}`, {
        body,
        responseType: 'json',
        params,
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

  get<T>(endpoint: string, queryParams?: any): Observable<T> {
    return this.request(endpoint, HttpMethod.GET, undefined, queryParams);
  }
}
