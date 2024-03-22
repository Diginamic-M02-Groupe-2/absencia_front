import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {ComponentsComponent} from "./components.component";
import {BadgeComponent} from "../../components/badge/badge.component";

@NgModule({
  declarations: [
    BadgeComponent,
    ComponentsComponent,
  ],
  imports: [
    CalendarModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    SelectButtonModule,
  ],
  bootstrap: [
    ComponentsComponent,
  ],
})
export class ComponentsModule {}