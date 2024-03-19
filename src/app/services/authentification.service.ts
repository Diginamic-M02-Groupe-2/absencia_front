import { Injectable } from '@angular/core';
import { ROUTE_LOGIN } from '../app.routes';
import { Router } from '@angular/router';

const CURRENT_USER = 'currentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private router: Router) {}

  async logIn(email: string, password: string): Promise<boolean> {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CURRENT_USER, 'prenom nom');
    }
    return true;
  }

  logOut(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(CURRENT_USER);
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
