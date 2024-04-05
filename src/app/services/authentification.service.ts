import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoute } from './api.service';
import { firstValueFrom } from 'rxjs';
import { User } from '../entities/user/user';
import { UserService } from './user.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { Role } from '../entities/user/role';
import { ALLOWED_PERMISSIONS } from '../models/permission-role';

const CURRENT_USER = 'currentUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(
    private http: HttpClient,
    private permissionsService: NgxPermissionsService,
    private userService: UserService,
  ) {
    this.loadSession();
  }

  async loadSession(): Promise<void> {
    const token = sessionStorage.getItem(TOKEN);
    if (token) {
      const user: User = JSON.parse(sessionStorage.getItem(CURRENT_USER) || '{}');
      this.loadPermissions(user.role);
    }
  }

  async createSession(jwt: string): Promise<void> {
    sessionStorage.setItem(TOKEN, jwt);

    const user = await firstValueFrom(this.userService.getCurrentUser());
    sessionStorage.setItem(CURRENT_USER, JSON.stringify(user));

    this.loadPermissions(user.role);
  }

  loadPermissions(role: Role): void {
    let rolePermissions: string[] = [];

    switch (role) {
      case Role.EMPLOYEE:
        rolePermissions = Object.values(ALLOWED_PERMISSIONS[Role.EMPLOYEE]);
        break;
      case Role.ADMINISTRATOR:
        rolePermissions = Object.values(ALLOWED_PERMISSIONS[Role.ADMINISTRATOR]);
        break;
      case Role.MANAGER:
        rolePermissions = Object.values(ALLOWED_PERMISSIONS[Role.MANAGER]);
        break;
      default:
        rolePermissions = Object.values(ALLOWED_PERMISSIONS[Role.EMPLOYEE]);
        break;
    }

    this.permissionsService.loadPermissions(rolePermissions);
  }

  logout(): void {
    sessionStorage.removeItem(CURRENT_USER);
    sessionStorage.removeItem(TOKEN);
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

  async getUser(): Promise<User> {
    const user = await firstValueFrom(this.http.get<User>(ApiRoute.GET_CURRENT_USER));

    return user;
  }
}
