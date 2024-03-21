import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AUTH_API, LOGOUT_API } from './api.service';
import { firstValueFrom } from 'rxjs';
import { Token } from '../models/token';
import { RoutesPath } from '../models/route';
import { UserService } from './user.service';
import { User } from '../models/user';

const CURRENT_USER = 'currentUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  async logIn(email: string, password: string): Promise<boolean> {
    const data = {
      email: email,
      password: password,
    };
    const token = await firstValueFrom(this.http.post<Token>(AUTH_API, data));
    sessionStorage.setItem(TOKEN, token.token);
    const user = await firstValueFrom(this.userService.getCurrentUser());
    sessionStorage.setItem(CURRENT_USER, JSON.stringify(user));
    return true;
  }

  logOut(): void {
    this.http.post(LOGOUT_API, {});
    sessionStorage.removeItem(CURRENT_USER);
    sessionStorage.removeItem(TOKEN);
    this.router.navigateByUrl(RoutesPath.ROUTE_LOGIN);
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
