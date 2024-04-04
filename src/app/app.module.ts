import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './pages/components/components.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { AbsenceRequestListModule } from './pages/absence-request/list/list.module';
import { AbsenceRequestNewModule } from './pages/absence-request/new/new.module';
import { PublicHolidaysAndEmployerWtrListModule } from './pages/public-holidays-and-employer-wtr/list/list.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AbsenceRequestHistogramReportModule } from './pages/absence-request/histogram-report/histogram-report.module';
import { LoginModule } from './pages/login/login.module';
import { NotFoundModule } from './pages/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    ComponentsModule,
    AbsenceRequestListModule,
    AbsenceRequestHistogramReportModule,
    AbsenceRequestNewModule,
    NotFoundModule,
    PublicHolidaysAndEmployerWtrListModule,
    ToastModule,
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
