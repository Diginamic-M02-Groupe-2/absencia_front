import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";
import { CalendarTypeView } from "primeng/calendar";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrl: "./datepicker.component.module.scss",
})
export class DatepickerComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  view: CalendarTypeView = "date";

  @Input()
  name!: string;

  @Input()
  label!: string;

  @Input()
  placeholder?: string;
}