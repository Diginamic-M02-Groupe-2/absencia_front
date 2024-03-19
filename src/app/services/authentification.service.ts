import { Injectable } from '@angular/core';

const CURRENT_USER = 'currentUser';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor() {}

  async logIn(email: string, password: string): Promise<boolean> {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CURRENT_USER, 'prenom nom');
    }
    return true;
  }

  logOut(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(CURRENT_USER);
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
