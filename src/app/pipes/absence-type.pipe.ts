import { Pipe, PipeTransform } from '@angular/core';
import {  toString } from '../models/absence';

@Pipe({
  name: 'absenceType',
  standalone: true
})
export class AbsenceTypePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    return toString(value);
  }

}
