import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {TableReportComponent} from "./table.component";
import {AppRoutingModule} from "../../../app.routes";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    TableReportComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    TableModule,
    FormsModule,
  ],
})
export class TableReportModule {}