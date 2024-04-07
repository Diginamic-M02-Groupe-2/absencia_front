import {Component, Input} from "@angular/core";
import {AbsenceRequest} from "../../../../entities/absence-request";

@Component({
  selector: "app-report-planning-absence-request-cell",
  templateUrl: "./absence-request-cell.component.html",
  styleUrl: "./absence-request-cell.component.module.scss",
})
export class ReportPlanningAbsenceRequestCellComponent {
  @Input()
  absenceRequest!: AbsenceRequest;

  @Input()
  dayOfMonth!: number;
}