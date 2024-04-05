import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ChartModule} from "primeng/chart";
import {AbsenceRequestHistogramReportComponent} from "./histogram-report.component";
import {AbsenceRequestHistogramComponent} from "../../../components/absence-request/histogram/histogram.component";
import {SharedModule} from "../../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";

@NgModule({
  declarations: [
    AbsenceRequestHistogramComponent,
    AbsenceRequestHistogramReportComponent,
  ],
  imports: [
    ReactiveFormsModule,
    ChartModule,
    CommonModule,
    SharedModule,
    DropdownModule,
    CalendarModule,
  ],
})
export class AbsenceRequestHistogramReportModule {}