import { Pipe, PipeTransform } from '@angular/core';
import { toString } from '../models/absence-status';

@Pipe({
  name: 'absenceRequestStatus',
  standalone: true
})
export class AbsenceRequestStatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return toString(value);
  }

}
