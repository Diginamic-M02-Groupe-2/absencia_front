import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {NgxPermissionsModule} from "ngx-permissions";
import {TableModule} from "primeng/table";
import {EmployerWtrAndPublicHolidayListComponent} from "./list.component";
import {AppRoutingModule} from "../../../app.routes";
import {EmployerWtrAndPublicHolidayTableComponent} from "../../../components/employer-wtr-and-public-holiday/table/table.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    EmployerWtrAndPublicHolidayListComponent,
    EmployerWtrAndPublicHolidayTableComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgxPermissionsModule.forRoot(),
    TableModule,
    SharedModule,
  ],
})
export class EmployerWtrAndPublicHolidayListModule {}