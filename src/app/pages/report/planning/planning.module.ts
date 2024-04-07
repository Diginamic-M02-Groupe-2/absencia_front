import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPermissionsModule} from "ngx-permissions";
import {CalendarModule} from "primeng/calendar";
import {PlanningReportComponent} from "./planning.component";
import {PlanningCellComponent} from "../../../components/planning/cell/cell.component";
import {PlanningAbsenceRequestCellComponent} from "../../../components/planning/absence-request-cell/absence-request-cell.component";
import {PlanningEmployerWtrCellComponent} from "../../../components/planning/employer-wtr-cell/employer-wtr-cell.component";
import {PlanningPublicHolidayCellComponent} from "../../../components/planning/public-holiday-cell/public-holiday-cell.component";
import {PlanningWeekEndCellComponent} from "../../../components/planning/week-end-cell/week-end-cell.component";
import {AbsenceRequestStatusPipe} from "../../../pipes/absence-request-status.pipe";
import {AbsenceTypePipe} from "../../../pipes/absence-type.pipe";
import {EmployerWtrStatusPipe} from "../../../pipes/employer-wtr-status.pipe";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    PlanningAbsenceRequestCellComponent,
    PlanningCellComponent,
    PlanningEmployerWtrCellComponent,
    PlanningPublicHolidayCellComponent,
    PlanningReportComponent,
    PlanningWeekEndCellComponent,
  ],
  imports: [
    AbsenceRequestStatusPipe,
    AbsenceTypePipe,
    CommonModule,
    CalendarModule,
    EmployerWtrStatusPipe,
    NgxPermissionsModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PlanningReportModule {}