import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_DASHBOARD } from './app.routes';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  routeToDashboard = `/${ROUTE_DASHBOARD}`;

  firstName: string = '';

  sidebarVisible: boolean = false;

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  isActive = (path: string) => {
    return path === this.router.url;
  };

  toggleSidebar(isVisible: boolean) {
    this.sidebarVisible = isVisible;
  }

  onLogOut(): void {
    this.authentificationService.logOut();
  }

  get isLogged() {
    this.firstName = this.authentificationService.getPseudo();
    return this.authentificationService.isUserConnected;
  }
}
