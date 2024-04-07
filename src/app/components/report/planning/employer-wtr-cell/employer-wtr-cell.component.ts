import {Component, Input} from "@angular/core";
import {EmployerWtr} from "../../../../entities/employer-wtr";

@Component({
  selector: "app-report-planning-employer-wtr-cell",
  templateUrl: "./employer-wtr-cell.component.html",
  styleUrl: "./employer-wtr-cell.component.module.scss",
})
export class ReportPlanningEmployerWtrCellComponent {
  @Input()
  employerWtr!: EmployerWtr;

  @Input()
  dayOfMonth!: number;
}