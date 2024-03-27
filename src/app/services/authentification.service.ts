import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LOGOUT_API } from './api.service';
import { firstValueFrom } from 'rxjs';
import { User } from '../entities/user/user';
import { Route } from '../models/route';
import { UserService } from './user.service';

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

  async createSession(jwt: string): Promise<void> {
    sessionStorage.setItem(TOKEN, jwt);

    const user = await firstValueFrom(this.userService.getCurrentUser());

    sessionStorage.setItem(CURRENT_USER, JSON.stringify(user));
  }

  logOut(): void {
    this.http.post(LOGOUT_API, {});
    sessionStorage.removeItem(CURRENT_USER);
    sessionStorage.removeItem(TOKEN);
    this.router.navigateByUrl(Route.LOGIN);
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
