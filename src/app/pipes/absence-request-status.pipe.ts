import {Pipe, PipeTransform} from "@angular/core";
import {AbsenceRequestStatus, absenceRequestStatusStrings} from "../entities/absence-request-status";

@Pipe({
  name: "absenceRequestStatus",
  standalone: true,
})
export class AbsenceRequestStatusPipe implements PipeTransform {
  transform(value: string): string {
    const absenceType: AbsenceRequestStatus = value as AbsenceRequestStatus;

    return absenceRequestStatusStrings[absenceType];
  }
}