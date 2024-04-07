import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPermissionsModule} from "ngx-permissions";
import {CalendarModule} from "primeng/calendar";
import {PlanningReportComponent} from "./planning.component";
import {ReportPlanningCellComponent} from "../../../components/report/planning/cell/cell.component";
import {ReportPlanningAbsenceRequestCellComponent} from "../../../components/report/planning/absence-request-cell/absence-request-cell.component";
import {ReportPlanningEmployerWtrCellComponent} from "../../../components/report/planning/employer-wtr-cell/employer-wtr-cell.component";
import {ReportPlanningPublicHolidayCellComponent} from "../../../components/report/planning/public-holiday-cell/public-holiday-cell.component";
import {ReportPlanningWeekEndCellComponent} from "../../../components/report/planning/week-end-cell/week-end-cell.component";
import {AbsenceRequestStatusPipe} from "../../../pipes/absence-request-status.pipe";
import {AbsenceTypePipe} from "../../../pipes/absence-type.pipe";
import {EmployerWtrStatusPipe} from "../../../pipes/employer-wtr-status.pipe";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    PlanningReportComponent,
    ReportPlanningAbsenceRequestCellComponent,
    ReportPlanningCellComponent,
    ReportPlanningEmployerWtrCellComponent,
    ReportPlanningPublicHolidayCellComponent,
    ReportPlanningWeekEndCellComponent,
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