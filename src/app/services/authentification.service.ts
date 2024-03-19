import { Injectable } from '@angular/core';
import { ROUTE_LOGIN } from '../app.routes';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AUTH_API } from './api.service';
import { firstValueFrom } from 'rxjs';
import { TokenService } from './token.service';
import { Token } from '../models/token';

const CURRENT_USER = 'currentUser';
const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  async logIn(email: string, password: string): Promise<boolean> {
    if (typeof localStorage !== 'undefined') {
      const data = {
        email: email,
        password: password,
      };
      const token = await firstValueFrom(this.http.post<Token>(AUTH_API, data));
      console.log('user: ', token);
      localStorage.setItem(TOKEN, token.token);
      //recup user
      localStorage.setItem(CURRENT_USER, `prenom nom`);
      return true;
    }
    return false;
  }

  logOut(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(CURRENT_USER);
      localStorage.removeItem(TOKEN);
      this.router.navigateByUrl(ROUTE_LOGIN);
    }
  }

  getPseudo(): string {
    let storedUser: string | null = '';
    if (typeof localStorage !== 'undefined') {
      storedUser = localStorage.getItem(CURRENT_USER);
      if (!storedUser) {
        return '';
      }
    }
    return storedUser;
  }

  public get isUserConnected(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(CURRENT_USER) !== null;
    }
    return false;
  }
}
