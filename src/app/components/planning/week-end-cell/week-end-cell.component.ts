import {Component, Input} from "@angular/core";

@Component({
  selector: "app-planning-week-end-cell",
  templateUrl: "./week-end-cell.component.html",
  styleUrl: "./week-end-cell.component.module.scss",
})
export class PlanningWeekEndCellComponent {
  @Input()
  dayOfMonth!: number;
}