import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {NgxPermissionsModule} from "ngx-permissions";
import {TableModule} from "primeng/table";
import {EmployerWtrAndPublicHolidayReadComponent} from "./read.component";
import {AppRoutingModule} from "../../../app.routes";
import {EmployerWtrAndPublicHolidayTableComponent} from "../../../components/employer-wtr-and-public-holiday/table/table.component";
import {EmployerWtrDeleteDialogComponent} from "../../../components/employer-wtr-and-public-holiday/delete-dialog/delete-dialog.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    EmployerWtrAndPublicHolidayReadComponent,
    EmployerWtrAndPublicHolidayTableComponent,
    EmployerWtrDeleteDialogComponent,
    // EmployerWtrEditDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgxPermissionsModule.forRoot(),
    TableModule,
    SharedModule,
  ],
})
export class EmployerWtrAndPublicHolidayReadModule {}