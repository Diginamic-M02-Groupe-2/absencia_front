import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.module.scss",
})
export class CheckboxComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  name!: string;

  @Input()
  label!: string;

  @Input()
  checked!: boolean;

  @Input()
  value?: string = "";
}