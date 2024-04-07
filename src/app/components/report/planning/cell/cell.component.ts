import {Component, Input} from "@angular/core";

@Component({
  selector: "app-report-planning-cell",
  templateUrl: "./cell.component.html",
  styleUrl: "./cell.component.module.scss",
})
export class ReportPlanningCellComponent {
  @Input()
  dayOfMonth!: number;
}