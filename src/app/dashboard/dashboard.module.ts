import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AbsenceRequestListComponent } from '../components/lists/absence-request-list/absence-request-list.component';
import { TableModule } from 'primeng/table';
import { AbsenceTypePipe } from "../pipes/absence-type.pipe";
import { AbsenceRequestStatusPipe } from '../pipes/absence-request-status.pipe';

@NgModule({
  declarations: [DashboardComponent, AbsenceRequestListComponent],
  imports: [CommonModule, TableModule, AbsenceTypePipe, AbsenceRequestStatusPipe]
})
export class DashboardModule { }
