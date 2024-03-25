import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.module.scss",
})
export class SelectComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  name!: string;

  @Input()
  label!: string;

  @Input()
  placeholder?: string;

  @Input()
  options!: any[];

  @Input("segmented")
  isSegmented: boolean = false;
}