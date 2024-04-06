import {Pipe, PipeTransform} from "@angular/core";
import {EmployerWtrStatus, employerWtrStatusStrings} from "../entities/employer-wtr-status";

@Pipe({
  name: "employerWtrStatus",
  standalone: true,
})
export class EmployerWtrStatusPipe implements PipeTransform {
  transform(value: string): string {
    const absenceType: EmployerWtrStatus = value as EmployerWtrStatus;

    return employerWtrStatusStrings[absenceType];
  }
}