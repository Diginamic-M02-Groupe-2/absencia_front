import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const ROUTE_DASHBOARD = 'dashboard';
export const ROUTE_LOGIN = 'login';

export const routes: Routes = [
  { path: '', redirectTo: ROUTE_LOGIN, pathMatch: 'full' },
  { path: ROUTE_LOGIN, component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: ROUTE_DASHBOARD,
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: ROUTE_DASHBOARD },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
