import { Injectable } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Route } from '../../models/route';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router,
    private permissionsService: NgxPermissionsService,
  ) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const storedUserConnectedStatus =
      this.authentificationService.isUserConnected;

    if (!storedUserConnectedStatus) {
      this.router.navigateByUrl(Route.LOGIN);
      return false;
    }

    const requiredPermission: string = route.data['requiredPermission'];

    if (!await this.permissionsService.hasPermission(requiredPermission)) {
      this.router.navigateByUrl(Route.ABSENCE_REQUEST_LIST);
      return false;
    }

    return true;
  }
}
