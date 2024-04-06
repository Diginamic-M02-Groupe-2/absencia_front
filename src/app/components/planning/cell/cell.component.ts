import {Component, Input} from "@angular/core";

@Component({
  selector: "app-planning-cell",
  templateUrl: "./cell.component.html",
  styleUrl: "./cell.component.module.scss",
})
export class PlanningCellComponent {
  @Input()
  dayOfMonth!: number;
}