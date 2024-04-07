import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TableModule} from "primeng/table";
import {TableReportComponent} from "./table.component";
import {ReportTableComponent} from "../../../components/report/table/table.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    ReportTableComponent,
    TableReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
  ],
})
export class TableReportModule {}