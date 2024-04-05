import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Route } from './models/route';
import {AbsenceRequestListComponent} from "./pages/absence-request/list/list.component";
import {AbsenceRequestHistogramReportComponent} from "./pages/absence-request/histogram-report/histogram-report.component";
import {AbsenceRequestNewComponent} from "./pages/absence-request/new/new.component";
import {ComponentsComponent} from "./pages/components/components.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PublicHolidaysAndEmployerWtrListComponent} from "./pages/public-holidays-and-employer-wtr/list/list.component";
import { TableDayServiceComponent } from './pages/table-day-service/table-day-service.component';

export const routes: Routes = [
  { path: '', redirectTo: Route.LOGIN, pathMatch: 'full' },
  {
    path: Route.LOGIN,
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: Route.COMPONENTS,
    component: ComponentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: Route.ABSENCE_REQUEST_LIST,
    component: AbsenceRequestListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: Route.ABSENCE_REQUEST_CREATE,
    component: AbsenceRequestNewComponent,
    canActivate: [AuthGuard],
    data: { requiredPermission: 'CAN_ROUTE_TO_POST_ABSENCE_REQUEST' }
  },
  {
    path: Route.HISTOGRAM,
    component: AbsenceRequestHistogramReportComponent,
    canActivate: [AuthGuard],
    data: { requiredPermission: 'CAN_VISUALIZE_HISTOGRAM_ABSENCE_REQUEST' }
  },
  {
    path: Route.PUBLIC_HOLIDAYS_AND_EMPLOYER_WTR_LIST,
    component: PublicHolidaysAndEmployerWtrListComponent,
    canActivate: [AuthGuard],
  },
   {
    path: Route.TABLE_DAY_SERVICE,
    component: TableDayServiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}