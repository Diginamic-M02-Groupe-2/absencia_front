import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AbsenceRequestListComponent } from '../components/lists/absence-request-list/absence-request-list.component';
import { TableModule } from 'primeng/table';
import { AbsenceTypePipe } from '../pipes/absence-type.pipe';
import { AbsenceRequestStatusPipe } from '../pipes/absence-request-status.pipe';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [DashboardComponent, AbsenceRequestListComponent],
  imports: [
    CommonModule,
    TableModule,
    AbsenceTypePipe,
    AbsenceRequestStatusPipe,
    ButtonModule,
    ToastModule
  ],
})
export class DashboardModule {}
