import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceRequestCreateComponent } from './absence-request-create.component';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AbsenceRequestCreateComponent],
  imports: [
    CommonModule,
    CalendarModule,
    CardModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
  ],
})
export class AbsenceRequestCreateModule {}
