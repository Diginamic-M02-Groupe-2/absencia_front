import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {ComponentsComponent} from "./components.component";
import {DatepickerComponent} from "../../components/datepicker/datepicker.component";
import {FormComponent} from "../../components/form/form.component";
import {FormFieldComponent} from "../../components/form-field/form-field.component";
import {FormFooterComponent} from "../../components/form-footer/form-footer.component";
import {FormGroupComponent} from "../../components/form-group/form-group.component";
import {SelectComponent} from "../../components/select/select.component";
import {TextInputComponent} from "../../components/text-input/text-input.component";
import {ToastModule} from "primeng/toast";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ComponentsComponent,
    DatepickerComponent,
    FormComponent,
    FormFieldComponent,
    FormFooterComponent,
    FormGroupComponent,
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
    SharedModule,
    ToastModule,
  ],
  bootstrap: [ComponentsComponent],
  exports: [
    ComponentsComponent,
    DatepickerComponent,
    FormComponent,
    FormFieldComponent,
    FormFooterComponent,
    FormGroupComponent,
    SelectComponent,
    TextInputComponent,
  ],
})
export class ComponentsModule {}