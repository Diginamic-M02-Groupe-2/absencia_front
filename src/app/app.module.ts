import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { LoginModule } from './auth/components/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './pages/components/components.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { AbsenceRequestCreateModule } from './absence-request-create/absence-request-create.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AbsenceRequestListModule } from './pages/absence-request/list/list.module';
import { PublicHolidaysAndEmployerWtrListModule } from './pages/public-holidays-and-employer-wtr/list/list.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    DashboardModule,
    ComponentsModule,
    AbsenceRequestListModule,
    AbsenceRequestCreateModule,
    ToastModule
    PublicHolidaysAndEmployerWtrListModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
