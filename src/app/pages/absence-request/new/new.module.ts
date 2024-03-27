import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {AbsenceRequestNewComponent} from "./new.component";
import {ComponentsModule} from "../../components/components.module";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AbsenceRequestNewComponent,
  ],
  imports: [
    // CalendarModule,
    // CardModule,
    // CommonModule,
    // ComponentsModule,
    // DropdownModule,
    // InputTextModule,
    // ReactiveFormsModule,
    SharedModule,
  ],
})
export class AbsenceRequestNewModule {}