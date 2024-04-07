import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ChartModule} from "primeng/chart";
import {HistogramReportComponent} from "./histogram.component";
import {ReportHistogramComponent} from "../../../components/report/histogram/histogram.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    HistogramReportComponent,
    ReportHistogramComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    SharedModule,
  ],
})
export class HistogramReportModule {}