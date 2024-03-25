import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthentificationService} from "./authentification.service";

const API_URL = 'http://localhost:8080/api';
const BASE_URL = API_URL;
export const AUTH_API = `${API_URL}/login`;
export const LOGOUT_API = `${API_URL}/logout`;
export const GET_USER_API = `${API_URL}/users/current`;
export const GET_ABSENCE_REQUESTS = `${API_URL}/absence-requests`;

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
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthentificationService,
  ) {}

  async request(endpoint: string, method: HttpMethod, body?: FormData): Promise<Response> {
    if (!this.authenticationService.isUserConnected) {
      throw new Error("User is logged out");
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        // "Content-Type": "multipart/form-data",
      },
      body,
    });

    return response;
  }
}
