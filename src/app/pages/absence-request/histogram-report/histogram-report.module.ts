import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ChartModule} from "primeng/chart";
import {AbsenceRequestHistogramReportComponent} from "./histogram-report.component";
import {AbsenceRequestHistogramComponent} from "../../../components/absence-request/histogram/histogram.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AbsenceRequestHistogramComponent,
    AbsenceRequestHistogramReportComponent,
  ],
  imports: [
    ChartModule,
    CommonModule,
    SharedModule,
  ],
})
export class AbsenceRequestHistogramReportModule {}