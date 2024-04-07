import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ChartModule} from "primeng/chart";
import {HistogramReportComponent} from "./histogram.component";
import {HistogramComponent} from "../../../components/absence-request/histogram/histogram.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    HistogramComponent,
    HistogramReportComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    SharedModule,
  ],
})
export class HistogramReportModule {}