import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./guards/auth.guard";
import {LoginGuard} from "./guards/login.guard";
import {Route} from "./models/route";
import {AbsenceRequestListComponent} from "./pages/absence-request/list/list.component";
import {AbsenceRequestNewComponent} from "./pages/absence-request/new/new.component";
import {ComponentsComponent} from "./pages/components/components.component";
import {EmployerWtrCreateComponent} from "./pages/employer-wtr/create/create.component";
import {EmployerWtrAndPublicHolidayReadComponent} from "./pages/employer-wtr-and-public-holiday/read/read.component";
import {LoginComponent} from "./pages/login/login.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HistogramReportComponent} from "./pages/report/histogram/histogram.component";
import {PlanningReportComponent} from "./pages/report/planning/planning.component";
import {TableReportComponent} from "./pages/report/table/table.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: Route.LOGIN,
    pathMatch: "full",
  }, {
    path: Route.LOGIN,
    component: LoginComponent,
    canActivate: [
      LoginGuard,
    ],
  }, {
    path: Route.COMPONENTS,
    component: ComponentsComponent,
    canActivate: [
      AuthGuard,
    ],
  }, {
    path: Route.ABSENCE_REQUEST_LIST,
    component: AbsenceRequestListComponent,
    canActivate: [
      AuthGuard,
    ],
  }, {
    path: Route.ABSENCE_REQUEST_CREATE,
    component: AbsenceRequestNewComponent,
    canActivate: [
      AuthGuard,
    ],
    data: {
      requiredPermission: "CAN_ROUTE_TO_POST_ABSENCE_REQUEST",
    },
  }, {
    path: Route.EMPLOYER_WTR_AND_PUBLIC_HOLIDAY_READ,
    component: EmployerWtrAndPublicHolidayReadComponent,
    canActivate: [
      AuthGuard,
    ],
  }, {
    path: Route.EMPLOYER_WTR_CREATE,
    component: EmployerWtrCreateComponent,
    canActivate: [
      AuthGuard,
    ],
  }, {
    path: Route.REPORT_HISTOGRAM,
    component: HistogramReportComponent,
    canActivate: [
      AuthGuard,
    ],
    data: {
      requiredPermission: "CAN_READ_HISTOGRAM_REPORT",
    },
  }, {
    path: Route.REPORT_PLANNING,
    component: PlanningReportComponent,
    canActivate: [
      AuthGuard,
    ],
    data: {
      requiredPermission: "CAN_READ_PLANNING_REPORT",
    },
  }, {
    path: Route.REPORT_TABLE,
    component: TableReportComponent,
    canActivate: [
      AuthGuard,
    ],
    data: {
      requiredPermission: "CAN_READ_TABLE_REPORT",
    },
  }, {
    path: "**",
    component: NotFoundComponent,
    canActivate: [
      AuthGuard,
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}