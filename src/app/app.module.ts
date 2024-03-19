import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routes';
import { config } from './app.config.server';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    SidebarModule,
    RouterModule.forRoot([]),
  ],
  providers: [config.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
