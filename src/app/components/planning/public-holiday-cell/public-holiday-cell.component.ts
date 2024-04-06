import {Component, Input} from "@angular/core";
import {PublicHoliday} from "../../../entities/public-holiday";

@Component({
  selector: "app-planning-public-holiday-cell",
  templateUrl: "./public-holiday-cell.component.html",
  styleUrl: "./public-holiday-cell.component.module.scss",
})
export class PlanningPublicHolidayCellComponent {
  @Input()
  publicHoliday!: PublicHoliday;

  @Input()
  dayOfMonth!: number;
}