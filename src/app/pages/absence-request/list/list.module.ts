import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {AbsenceRequestListComponent} from "./list.component";
import {AppRoutingModule} from "../../../app.routes";
import {AbsenceRequestTableComponent} from "../../../components/absence-request/table/table.component";
import {AbsenceRequestDeleteDialogComponent} from "../../../components/absence-request/table/delete-dialog/delete-dialog.component";
import {ComponentsModule} from "../../components/components.module";
import {AbsenceRequestStatusPipe} from "../../../pipes/absence-request-status.pipe";
import {AbsenceTypePipe} from "../../../pipes/absence-type.pipe";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AbsenceRequestDeleteDialogComponent,
    AbsenceRequestListComponent,
    AbsenceRequestTableComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    AbsenceRequestStatusPipe,
    AbsenceTypePipe,
    SharedModule,
    TableModule,
    ToastModule,
    DialogModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class AbsenceRequestListModule {}