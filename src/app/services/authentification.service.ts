import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiRoute, LOGOUT_API } from './api.service';
import { firstValueFrom } from 'rxjs';
import { User } from '../entities/user/user';
import { UserService } from './user.service';
import { MessageService } from 'primeng/api';
import { Route } from '../models/route';
import { NgxPermissionsService } from 'ngx-permissions';
import { Role } from '../entities/user/role';
import { ALLOWED_PERMISSIONS } from '../models/permissions-role';
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
    private messageService: MessageService,
    private permissionsService: NgxPermissionsService
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

  logOut(): void {
    this.http
      .post(LOGOUT_API, {})
      .subscribe((logoutStatus: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Session',
          detail: logoutStatus.message,
        });
      })
      .add(() => {
        sessionStorage.removeItem(CURRENT_USER);
        sessionStorage.removeItem(TOKEN);
        this.router.navigateByUrl(Route.LOGIN);
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

  async getUser(): Promise<User> {
    const user = await firstValueFrom(this.http.get<User>(ApiRoute.GET_CURRENT_USER));

    return user;
  }
}
