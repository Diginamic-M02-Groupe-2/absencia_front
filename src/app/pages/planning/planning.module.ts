import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPermissionsModule} from "ngx-permissions";
import {CalendarModule} from "primeng/calendar";
import {PlanningComponent} from "./planning.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    PlanningComponent,
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