import { Injectable } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { ROUTE_DASHBOARD } from '../../app.routes';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    const storedUserConnectedStatus =
      this.authentificationService.isUserConnected;

    if (storedUserConnectedStatus) {
      this.router.navigateByUrl(ROUTE_DASHBOARD);
      return false;
    }

    return true;
  }
}
