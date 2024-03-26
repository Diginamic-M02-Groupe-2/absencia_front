import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { ComponentsComponent } from './pages/components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RoutesPath } from './models/route';
import { AbsenceRequestListComponent } from './components/lists/absence-request-list/absence-request-list.component';
import { AbsenceRequestCreateComponent } from './absence-request-create/absence-request-create.component';

export const routes: Routes = [
  { path: '', redirectTo: RoutesPath.ROUTE_LOGIN, pathMatch: 'full' },
  {
    path: RoutesPath.ROUTE_LOGIN,
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: RoutesPath.ROUTE_COMPONENTS,
    component: ComponentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: RoutesPath.ROUTE_DASHBOARD,
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: RoutesPath.ROUTE_USER_ABSENCE_REQUESTS,
    component: AbsenceRequestListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: RoutesPath.ROUTE_ADMIN_ABSENCE_REQUESTS_CREATE,
    component: AbsenceRequestCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: RoutesPath.ROUTE_DASHBOARD },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
