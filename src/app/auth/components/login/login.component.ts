import { Component } from '@angular/core';
import { AuthentificationService } from '../../../services/authentification.service';
import { Router } from '@angular/router';
import { RoutesPath } from '../../../models/route';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  mailAdress: string = '';
  password: string = '';

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  async onLogin(event: Event): Promise<boolean> {
    event.preventDefault();
    if (!this.password || !this.mailAdress) {
      alert('Nom ou mot de passe incorrect !'); // sera remplacé par des toasts
      return false;
    }

    try {
      const isUserConnected = await this.authentificationService.logIn(
        this.mailAdress,
        this.password
      );

      if (!isUserConnected) {
        return false;
      }

      this.router.navigateByUrl(RoutesPath.ROUTE_USER_ABSENCE_REQUESTS);
      return true;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
      return false;
    }
  }
}
