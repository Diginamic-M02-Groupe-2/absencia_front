import { Injectable } from '@angular/core';

const IS_USER_CONNECTED = 'connectedUser';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor() {}

  async logIn(email: string, password: string): Promise<boolean> {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(IS_USER_CONNECTED, 'true');
    }
    return true;
  }

  logOut(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(IS_USER_CONNECTED);
    }
  }

  public get isUserConnected(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(IS_USER_CONNECTED) !== null;
    }
    return false;
  }
}
