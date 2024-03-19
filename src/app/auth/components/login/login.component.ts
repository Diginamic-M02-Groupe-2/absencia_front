import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthentificationService } from '../../../services/authentification.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RoutesPath } from 'src/app/models/route';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  standalone: true,
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

      this.router.navigateByUrl(RoutesPath.ROUTE_DASHBOARD);
      return true;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
      return false;
    }
  }
}
