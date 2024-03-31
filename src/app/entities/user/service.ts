import {Option} from "../../models/option";

export enum Service {
  MANAGEMENT = "MANAGEMENT", // Gestion
  DEVELOPMENT = "DEVELOPMENT", // Développement
  DESIGN = "DESIGN", // Design
  MARKETING = "MARKETING", // Marketing
  SALES = "SALES", // Ventes
}

export const serviceStrings: Record<Service, string> = {
  [Service.MANAGEMENT]: "Management",
  [Service.DEVELOPMENT]: "Développement",
  [Service.DESIGN]: "Design",
  [Service.MARKETING]: "Marketing",
  [Service.SALES]: "Ventes",
};

export const serviceOptions: Option[] = [
  {
    value: Service.MANAGEMENT,
    label: serviceStrings[Service.MANAGEMENT],
  }, {
    value: Service.DEVELOPMENT,
    label: serviceStrings[Service.DEVELOPMENT],
  }, {
    value: Service.DESIGN,
    label: serviceStrings[Service.DESIGN],
  }, {
    value: Service.MARKETING,
    label: serviceStrings[Service.MARKETING],
  }, {
    value: Service.SALES,
    label: serviceStrings[Service.SALES],
  },
];