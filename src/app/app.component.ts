import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ROUTE_DASHBOARD, ROUTE_LOGIN } from './app.routes';
import { AuthentificationService } from './services/authentification.service';
import { CommonModule } from '@angular/common';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  routeToDashboard = `/${ROUTE_DASHBOARD}`;
  routeToLogin = `/${ROUTE_LOGIN}`;

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
