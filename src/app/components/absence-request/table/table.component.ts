import {Component, Input} from "@angular/core";
import {AbsenceRequest} from "../../../entities/absence-request";

@Component({
  selector: "app-absence-request-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
})
export class AbsenceRequestTableComponent {
  @Input()
  absenceRequests!: AbsenceRequest[];
}