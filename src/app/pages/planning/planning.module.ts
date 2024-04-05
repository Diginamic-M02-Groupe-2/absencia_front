import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPermissionsModule} from "ngx-permissions";
import {CalendarModule} from "primeng/calendar";
import {PlanningComponent} from "./planning.component";
import {EmployeurWtrEditDialogComponent} from "../../components/employeur-wtr/employeur-wtr-edit-dialog/employeur-wtr-edit-dialog.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    PlanningComponent,
    EmployeurWtrEditDialogComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PlanningModule {}