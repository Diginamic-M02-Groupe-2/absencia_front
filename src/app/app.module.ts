import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MessageService} from "primeng/api";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app.routes";
import {ComponentsModule} from "./pages/components/components.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorizationInterceptor} from "./interceptors/authorization.interceptor";
import {AbsenceRequestListModule} from "./pages/absence-request/list/list.module";
import {AbsenceRequestNewModule} from "./pages/absence-request/new/new.module";
import {PlanningReportModule} from "./pages/report/planning/planning.module";
import {NgxPermissionsModule} from "ngx-permissions";
import {LoginModule} from "./pages/login/login.module";
import {NotFoundModule} from "./pages/not-found/not-found.module";
import {TableReportModule} from "./pages/report/table/table.module";
import {SharedModule} from "./shared/shared.module";
import {ToastModule} from "primeng/toast";
import {EmployerWtrAndPublicHolidayReadModule} from "./pages/employer-wtr-and-public-holiday/read/read.module";
import {EmployerWtrCreateModule} from "./pages/employer-wtr/create/create.module";
import {HistogramReportModule} from "./pages/report/histogram/histogram.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AbsenceRequestListModule,
    AbsenceRequestNewModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ComponentsModule,
    EmployerWtrAndPublicHolidayReadModule,
    EmployerWtrCreateModule,
    HistogramReportModule,
    HttpClientModule,
    LoginModule,
    NgxPermissionsModule.forRoot(),
    NotFoundModule,
    PlanningReportModule,
    RouterModule,
    SharedModule,
    SidebarModule,
    TableReportModule,
    ToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    MessageService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}