import { Injectable } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { Route } from '../../models/route';

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
      this.router.navigateByUrl(Route.ABSENCE_REQUEST_LIST);
      return false;
    }

    return true;
  }
}
