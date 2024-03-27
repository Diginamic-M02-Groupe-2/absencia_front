import {Pipe, PipeTransform} from "@angular/core";
import {AbsenceType, absenceTypeStrings} from "../entities/absence-type";

@Pipe({
  name: "absenceType",
  standalone: true,
})
export class AbsenceTypePipe implements PipeTransform {
  transform(value: string): string {
    const absenceType: AbsenceType = value as AbsenceType;

    return absenceTypeStrings[absenceType];
  }
}