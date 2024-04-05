import {Component, ViewChild} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {Sidebar} from "primeng/sidebar";
import {Route} from "./models/route";
import {ApiRoute, HttpMethod} from "./services/api.service";
import {AuthentificationService} from "./services/authentification.service";
import {MessageResponse} from "./models/message-response";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  absenceRequestReadRoute: string = Route.ABSENCE_REQUEST_LIST;

  tableDayServiceRoute: string = Route.TABLE_DAY_SERVICE;

  employerWtrAndPublicHolidayReadRoute: string = Route.EMPLOYER_WTR_AND_PUBLIC_HOLIDAY_READ;
 
  histogramReportRoute: string = Route.REPORT_HISTOGRAM;

  planningReportRoute: string = Route.REPORT_PLANNING;

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

  postLogout(): void {
    this.authentificationService.logout();

    this.router.navigateByUrl(Route.LOGIN);
  }

  get isLogged() {
    this.firstName = this.authentificationService.getPseudo();
    return this.authentificationService.isUserConnected;
  }
}