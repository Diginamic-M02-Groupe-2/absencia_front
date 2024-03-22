import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';
import { Sidebar } from 'primeng/sidebar';
import { RoutesPath } from './models/route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  routeToDashboard = `/${RoutesPath.ROUTE_USER_ABSENCE_REQUESTS}`;
  routeToLogin = `/${RoutesPath.ROUTE_LOGIN}`;
  routeToCreateAbsencesRequest = `/${RoutesPath.ROUTE_ADMIN_ABSENCE_REQUESTS_CREATE}`;

  firstName: string = '';

  sidebarVisible: boolean = false;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  async ngOnInit() {}

  isActive = (path: string) => {
    return path === this.router.url;
  };

  closeBack(e: Event): void {
    this.sidebarRef.close(e);
  }

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
