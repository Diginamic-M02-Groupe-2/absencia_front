import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AbsenceTypePipe } from '../pipes/absence-type.pipe';
import { AbsenceRequestStatusPipe } from '../pipes/absence-request-status.pipe';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AbsenceTypePipe,
    AbsenceRequestStatusPipe,
    ButtonModule,
    ToastModule
  ],
})
export class DashboardModule {}
