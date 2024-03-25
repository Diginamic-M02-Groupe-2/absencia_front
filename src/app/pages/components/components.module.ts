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
import {FormFieldComponent} from "../../components/form-field/form-field.component";
import {SelectComponent} from "../../components/select/select.component";
import {TextInputComponent} from "../../components/text-input/text-input.component";

@NgModule({
  declarations: [
    BadgeComponent,
    ComponentsComponent,
    FormComponent,
    FormFieldComponent,
    SelectComponent,
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