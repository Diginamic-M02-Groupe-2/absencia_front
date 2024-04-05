import {Component, ViewChild} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {Sidebar} from "primeng/sidebar";
import {Route} from "./models/route";
import {ApiRoute, HttpMethod} from "./services/api.service";
import {AuthentificationService} from "./services/authentification.service";
import { MessageResponse } from "./models/message-response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  absenceRequestRoute: string = Route.ABSENCE_REQUEST_LIST;

  loginRoute: string = Route.LOGIN;

  publicHolidaysAndEmployerWtrRoute: string = Route.PUBLIC_HOLIDAYS_AND_EMPLOYER_WTR_LIST;
  
  tableDayServiceRoute: string = Route.TABLE_DAY_SERVICE;

  createAbsenceRequestRoute: string = Route.ABSENCE_REQUEST_CREATE;

  histogramRoute: string = Route.HISTOGRAM;

  firstName: string = '';

  sidebarVisible: boolean = false;

  logoutFormGroup: FormGroup = new FormGroup({});

  logoutFormMethod: HttpMethod = HttpMethod.POST;

  logoutFormAction: string = ApiRoute.LOGOUT;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authentificationService: AuthentificationService,
  ) {}

  isActive = (path: string) => {
    return path === this.router.url;
  };

  closeBack(event: Event): void {
    this.sidebarRef.close(event);
  }

  toggleSidebar(isVisible: boolean) {
    this.sidebarVisible = isVisible;
  }

  postLogout(response: MessageResponse): void {
    this.authentificationService.logout();

    this.router.navigateByUrl(Route.LOGIN);
  }

  get isLogged() {
    this.firstName = this.authentificationService.getPseudo();
    return this.authentificationService.isUserConnected;
  }
}