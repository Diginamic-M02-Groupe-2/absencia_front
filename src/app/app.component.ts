import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ROUTE_DASHBOARD } from './app.routes';
import { AuthentificationService } from './services/authentification.service';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, SidebarModule, RouterModule],
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
