import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {ToastModule} from "primeng/toast";
import { CheckboxModule } from "primeng/checkbox";

import {AppRoutingModule} from "../app.routes";
import {BackLinkComponent} from "../components/back-link/back-link.component";
import {BadgeComponent} from "../components/badge/badge.component";
import {DatepickerComponent} from "../components/datepicker/datepicker.component";
import {DialogComponent} from "../components/dialog/dialog.component";
import {FormComponent} from "../components/form/form.component";
import {FormFieldComponent} from "../components/form-field/form-field.component";
import {FormFooterComponent} from "../components/form-footer/form-footer.component";
import {FormGroupComponent} from "../components/form-group/form-group.component";
import {SelectComponent} from "../components/select/select.component";
import {TextInputComponent} from "../components/text-input/text-input.component";
import {TodoComponent} from "../components/todo/todo.component";
import { CheckboxComponent } from "../components/checkbox/checkbox.component";

@NgModule({
  declarations: [
    BackLinkComponent,
	  BadgeComponent,
    DatepickerComponent,
    DialogComponent,
    FormComponent,
    FormFieldComponent,
    FormFooterComponent,
    FormGroupComponent,
    SelectComponent,
    TextInputComponent,
    TodoComponent,
    CheckboxComponent,
  ],
  imports: [
    AppRoutingModule,
    CalendarModule,
    CommonModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    CheckboxModule,
  ],
  exports: [
    BackLinkComponent,
    BadgeComponent,
    DatepickerComponent,
    DialogComponent,
    FormComponent,
    FormFieldComponent,
    FormFooterComponent,
    FormGroupComponent,
    SelectComponent,
    TextInputComponent,
    TodoComponent,
    CheckboxComponent,
  ],
  bootstrap: [],
})
export class SharedModule {}