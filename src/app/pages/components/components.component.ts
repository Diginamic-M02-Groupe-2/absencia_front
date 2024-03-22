import {Component} from "@angular/core";
import {Service} from "../../models/user-service";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.scss"],
})
export class ComponentsComponent {
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
}