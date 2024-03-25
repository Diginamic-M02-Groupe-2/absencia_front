import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpMethod} from "../../services/api.service";
import {Service} from "../../models/user-service";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.scss"],
})
export class ComponentsComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.POST;

  formAction: string = "/absence-requests/test";

  options = [
    {
      value: Service.MANAGEMENT,
      label: "Management",
    }, {
      value: Service.DESIGN,
      label: "Design",
    }, {
      value: Service.MARKETING,
      label: "Marketing",
    },
  ];

  constructor() {
    this.formGroup = new FormGroup({
      type: new FormControl(null, [Validators.required]),
      reason: new FormControl("", [Validators.required]),
    });
  }
}