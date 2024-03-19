import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthentificationService } from '../../../services/authentification.service';
import { ROUTE_DASHBOARD } from '../../../app.routes';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

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

  async onLogin(): Promise<boolean> {
    if (!this.password || !this.mailAdress) {
      alert('Nom ou mot de passe incorrect !'); //sera remplacé par des toasts
      return false;
    }

    await this.authentificationService
      .logIn(this.mailAdress, this.password)
      .then((isUserConnected) => {
        if (!isUserConnected) {
          return;
        }
        this.router.navigateByUrl(ROUTE_DASHBOARD);
      });
    return true;
  }
}
