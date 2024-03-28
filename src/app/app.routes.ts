import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { ComponentsComponent } from './pages/components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Route } from './models/route';
import {AbsenceRequestListComponent} from "./pages/absence-request/list/list.component";
import {AbsenceRequestNewComponent} from "./pages/absence-request/new/new.component";
import {PublicHolidaysAndEmployerWtrListComponent} from "./pages/public-holidays-and-employer-wtr/list/list.component";

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
    path: Route.DASHBOARD,
    component: DashboardComponent,
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
  }, {
    path: Route.PUBLIC_HOLIDAYS_AND_EMPLOYER_WTR_LIST,
    component: PublicHolidaysAndEmployerWtrListComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: Route.DASHBOARD },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
