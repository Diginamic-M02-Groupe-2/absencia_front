import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {AbsenceRequestListComponent} from "./list.component";
import {AppRoutingModule} from "../../../app.routes";
import {AbsenceRequestTableComponent} from "../../../components/absence-request/table/table.component";
import {AbsenceRequestStatusPipe} from "../../../pipes/absence-request-status.pipe";
import {AbsenceTypePipe} from "../../../pipes/absence-type.pipe";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
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
  ],
})
export class AbsenceRequestListModule {}