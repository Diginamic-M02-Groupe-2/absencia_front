import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {DropdownModule} from "primeng/dropdown";
import {HistogramReportComponent} from "./histogram.component";
import {HistogramComponent} from "../../../components/absence-request/histogram/histogram.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    HistogramComponent,
    HistogramReportComponent,
  ],
  imports: [
    ChartModule,
    DropdownModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HistogramReportModule {}