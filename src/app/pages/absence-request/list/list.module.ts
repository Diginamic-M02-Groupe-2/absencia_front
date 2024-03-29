import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {AbsenceRequestListComponent} from "./list.component";
import {AppRoutingModule} from "../../../app.routes";
import {AbsenceRequestTableComponent} from "../../../components/absence-request/table/table.component";
import {AbsenceRequestDeleteDialogComponent} from "../../../components/absence-request/delete-dialog/delete-dialog.component";
import {AbsenceRequestEditDialogComponent} from "../../../components/absence-request/edit-dialog/edit-dialog.component";
import {ComponentsModule} from "../../components/components.module";
import {AbsenceRequestStatusPipe} from "../../../pipes/absence-request-status.pipe";
import {AbsenceTypePipe} from "../../../pipes/absence-type.pipe";
import {SharedModule} from "../../../shared/shared.module";
import { NgxPermissionsModule } from "ngx-permissions";

@NgModule({
  declarations: [
    AbsenceRequestDeleteDialogComponent,
    AbsenceRequestEditDialogComponent,
    AbsenceRequestListComponent,
    AbsenceRequestTableComponent,
  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    AbsenceRequestStatusPipe,
    AbsenceTypePipe,
    SharedModule,
    TableModule,
    DialogModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class AbsenceRequestListModule {}