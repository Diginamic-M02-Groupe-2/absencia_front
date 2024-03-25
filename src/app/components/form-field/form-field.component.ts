import {Component, Input} from "@angular/core";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: "app-form-field",
  templateUrl: "./form-field.component.html",
  styleUrl: "./form-field.component.module.scss",
})
export class FormFieldComponent {
  @Input()
  control!: AbstractControl;

  @Input()
  label!: string;
}