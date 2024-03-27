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
import { DialogModule } from "primeng/dialog";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule } from "@angular/forms";

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
    DialogModule,
    ComponentsModule,
    FormsModule,
  ],
})
export class AbsenceRequestListModule {}