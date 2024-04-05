import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {NgxPermissionsModule} from "ngx-permissions";
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
    NgxPermissionsModule.forRoot(),
    SharedModule,
  ],
})
export class CalendarModule {}