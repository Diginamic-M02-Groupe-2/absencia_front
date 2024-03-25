import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrl: "./text-input.component.module.scss",
})
export class TextInputComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  type!: string;

  @Input()
  name!: string;

  @Input()
  label!: string;

  @Input()
  placeholder!: string;
}