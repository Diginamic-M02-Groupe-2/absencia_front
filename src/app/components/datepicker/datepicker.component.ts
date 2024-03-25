import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrl: "./datepicker.component.module.scss",
})
export class DatepickerComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  name!: string;

  @Input()
  label!: string;

  @Input()
  placeholder?: string;
}