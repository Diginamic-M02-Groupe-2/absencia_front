import {Component, Input} from "@angular/core";
import {EmployerWtr} from "../../../entities/employer-wtr";

@Component({
  selector: "app-planning-employer-wtr-cell",
  templateUrl: "./employer-wtr-cell.component.html",
  styleUrl: "./employer-wtr-cell.component.module.scss",
})
export class PlanningEmployerWtrCellComponent {
  @Input()
  employerWtr!: EmployerWtr;

  @Input()
  dayOfMonth!: number;
}