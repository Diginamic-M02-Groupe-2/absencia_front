import { AbsenceType } from './absence';

export type DropdownForm = {
  label: string;
  value: string;
};

export type DropdownAbsenceRequestForm = {
  label: string;
  value: AbsenceType;
};
