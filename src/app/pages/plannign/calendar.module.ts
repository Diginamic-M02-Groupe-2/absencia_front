import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPermissionsModule} from "ngx-permissions";
import {CalendarModule as PrimeNGCalendarModule} from "primeng/calendar";
import {CalendarComponent} from "./calendar.component";
import {EmployeurWtrEditDialogComponent} from "../../components/employeur-wtr/employeur-wtr-edit-dialog/employeur-wtr-edit-dialog.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CalendarComponent,
    EmployeurWtrEditDialogComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGCalendarModule,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CalendarModule {}