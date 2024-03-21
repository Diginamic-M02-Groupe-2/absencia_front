import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RoutesPath } from './models/route';

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
  { path: '**', redirectTo: RoutesPath.ROUTE_DASHBOARD },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
