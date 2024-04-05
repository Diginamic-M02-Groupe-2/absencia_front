import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './pages/components/components.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { AbsenceRequestListModule } from './pages/absence-request/list/list.module';
import { AbsenceRequestNewModule } from './pages/absence-request/new/new.module';
import { CalendarModule } from './pages/calendar/calendar.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AbsenceRequestHistogramReportModule } from './pages/absence-request/histogram-report/histogram-report.module';
import { LoginModule } from './pages/login/login.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { TableDayServiceModule } from './pages/table-day-service/table-day-service.module';
import { SharedModule } from './shared/shared.module';
import { PublicHolidaysAndEmployerWtrListModule } from './pages/public-holidays-and-employer-wtr/list/list.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableDayServiceModule,
    AbsenceRequestListModule,
    AbsenceRequestHistogramReportModule,
    AbsenceRequestNewModule,
    ComponentsModule,
    LoginModule,
    NotFoundModule,
    PublicHolidaysAndEmployerWtrListModule,
    ToastModule,
    NgxPermissionsModule.forRoot(),
    CalendarModule,
    NgxPermissionsModule.forRoot()
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
