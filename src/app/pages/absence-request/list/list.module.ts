import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {NgxPermissionsModule} from "ngx-permissions";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {AbsenceRequestListComponent} from "./list.component";
import {AppRoutingModule} from "../../../app.routes";
import {AbsenceRequestDeleteDialogComponent} from "../../../components/absence-request/delete-dialog/delete-dialog.component";
import {AbsenceRequestEmployeeTableComponent} from "../../../components/absence-request/employee-table/employee-table.component";
import {AbsenceRequestUpdateDialogComponent} from "../../../components/absence-request/update-dialog/update-dialog.component";
import {AbsenceRequestTableComponent} from "../../../components/absence-request/table/table.component";
import {ComponentsModule} from "../../components/components.module";
import {AbsenceRequestStatusPipe} from "../../../pipes/absence-request-status.pipe";
import {AbsenceTypePipe} from "../../../pipes/absence-type.pipe";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AbsenceRequestDeleteDialogComponent,
    AbsenceRequestEmployeeTableComponent,
    AbsenceRequestListComponent,
    AbsenceRequestTableComponent,
    AbsenceRequestUpdateDialogComponent,
  ],
  imports: [
    AbsenceRequestStatusPipe,
    AbsenceTypePipe,
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    DialogModule,
    FormsModule,
    NgxPermissionsModule.forRoot(),
    SharedModule,
    TableModule,
  ],
})
export class AbsenceRequestListModule {}