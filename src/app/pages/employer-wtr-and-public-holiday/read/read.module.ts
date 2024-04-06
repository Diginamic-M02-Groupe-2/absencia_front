import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {NgxPermissionsModule} from "ngx-permissions";
import {TableModule} from "primeng/table";
import {EmployerWtrAndPublicHolidayReadComponent} from "./read.component";
import {AppRoutingModule} from "../../../app.routes";
import {EmployerWtrDeleteDialogComponent} from "../../../components/employer-wtr/delete-dialog/delete-dialog.component";
import {EmployerWtrUpdateDialogComponent} from "../../../components/employer-wtr/update-dialog/update-dialog.component";
import {EmployerWtrAndPublicHolidayTableComponent} from "../../../components/employer-wtr-and-public-holiday/table/table.component";
import {PublicHolidayUpdateDialogComponent} from "../../../components/public-holiday/update-dialog/update-dialog.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    EmployerWtrAndPublicHolidayReadComponent,
    EmployerWtrAndPublicHolidayTableComponent,
    EmployerWtrDeleteDialogComponent,
    EmployerWtrUpdateDialogComponent,
    PublicHolidayUpdateDialogComponent,
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