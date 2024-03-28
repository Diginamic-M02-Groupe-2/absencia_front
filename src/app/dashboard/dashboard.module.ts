import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AbsenceTypePipe } from '../pipes/absence-type.pipe';
import { AbsenceRequestStatusPipe } from '../pipes/absence-request-status.pipe';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ComponentsModule } from '../pages/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AbsenceTypePipe,
    AbsenceRequestStatusPipe,
    ButtonModule,
    ToastModule,
    DialogModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class DashboardModule {}
