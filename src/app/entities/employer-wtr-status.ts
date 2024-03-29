import {Option} from "../models/option";

export enum EmployerWtrStatus {
  INITIAL = "INITIAL", // Initial
  APPROVED = "APPROVED", // Validé
}

export const employerWtrStatusStrings: Record<EmployerWtrStatus, string> = {
  [EmployerWtrStatus.INITIAL]: "Initial",
  [EmployerWtrStatus.APPROVED]: "Validé",
};

export const employerWtrStatusOptions: Option[] = [
  {
    value: EmployerWtrStatus.INITIAL.toString(),
    label: employerWtrStatusStrings[EmployerWtrStatus.INITIAL],
  }, {
    value: EmployerWtrStatus.APPROVED.toString(),
    label: employerWtrStatusStrings[EmployerWtrStatus.APPROVED],
  },
];