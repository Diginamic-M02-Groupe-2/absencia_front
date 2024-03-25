import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ComponentsComponent } from './components.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { DatepickerComponent } from '../../components/datepicker/datepicker.component';
import { FormComponent } from '../../components/form/form.component';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { FormFooterComponent } from '../../components/form-footer/form-footer.component';
import { FormGroupComponent } from '../../components/form-group/form-group.component';
import { SelectComponent } from '../../components/select/select.component';
import { TextInputComponent } from '../../components/text-input/text-input.component';

@NgModule({
  declarations: [
    BadgeComponent,
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
  ],
  bootstrap: [ComponentsComponent],
  exports: [
    BadgeComponent,
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
