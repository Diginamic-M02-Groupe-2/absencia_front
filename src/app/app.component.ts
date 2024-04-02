import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';
import { Sidebar } from 'primeng/sidebar';
import { Route } from './models/route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  absenceRequestRoute: string = Route.ABSENCE_REQUEST_LIST;

  loginRoute: string = Route.LOGIN;

  publicHolidaysAndEmployerWtrRoute: string = Route.PUBLIC_HOLIDAYS_AND_EMPLOYER_WTR_LIST;
 
  createAbsenceRequestRoute: string = Route.ABSENCE_REQUEST_CREATE;

  histogramRoute: string = Route.HISTOGRAM;

  firstName: string = '';

  sidebarVisible: boolean = false;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

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
