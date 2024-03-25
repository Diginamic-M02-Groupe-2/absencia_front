import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {ComponentsComponent} from "./components.component";
import {BadgeComponent} from "../../components/badge/badge.component";
import {FormComponent} from "../../components/form/form.component";
import {TextInputComponent} from "../../components/text-input/text-input.component";

@NgModule({
  declarations: [
    BadgeComponent,
    ComponentsComponent,
    FormComponent,
    TextInputComponent,
  ],
  imports: [
    CalendarModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    SelectButtonModule,
  ],
  bootstrap: [
    ComponentsComponent,
  ],
})
export class ComponentsModule {}