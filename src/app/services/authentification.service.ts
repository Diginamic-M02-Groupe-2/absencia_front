import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AUTH_API, LOGOUT_API } from './api.service';
import { firstValueFrom } from 'rxjs';
import { Token } from '../models/token';
import { Route } from '../models/route';
import { UserService } from './user.service';
import { User } from '../models/user';
import { ResponseLoginError } from '../models/response-login-error';
import { MessageService } from 'primeng/api';

const CURRENT_USER = 'currentUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  async logIn(formData: FormData) {
    try {
      const token = await firstValueFrom(
        this.http.post<Token>(AUTH_API, formData)
      );
      sessionStorage.setItem(TOKEN, token.token);

      const user = await firstValueFrom(this.userService.getCurrentUser());
      sessionStorage.setItem(CURRENT_USER, JSON.stringify(user));
      return true;
    } catch (error: any) {
      if (error.status === 400 && error.error) {
        return error.error as ResponseLoginError;
      } else {
        return false;
      }
    }
  }

  logOut(): void {
    this.http.post(LOGOUT_API, {}).subscribe((logoutStatus: any) => {
      this.messageService.add({
        severity: 'success', summary: 'Session', detail: logoutStatus.message
      });
    }).add(() => {
      setTimeout(() => {
        sessionStorage.removeItem(CURRENT_USER);
        sessionStorage.removeItem(TOKEN);
        this.router.navigateByUrl(RoutesPath.ROUTE_LOGIN);
      }, 2000);
    });
  }

  getPseudo(): string {
    let storedUser: User = new User();
    const storedUserJSON = sessionStorage.getItem(CURRENT_USER);
    storedUser = JSON.parse(storedUserJSON as string);
    if (!storedUser) {
      return '';
    }
    return `${storedUser.firstName} ${storedUser.lastName}`;
  }

  public get isUserConnected(): boolean {
    return sessionStorage.getItem(CURRENT_USER) !== null;
  }
}
