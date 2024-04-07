export enum Route {
  // Development
  COMPONENTS = "components",
  // Authentication
  LOGIN = "login",
  // Absence request
  ABSENCE_REQUEST_LIST = "absence-requests",
  ABSENCE_REQUEST_CREATE = "absence-requests/create",
  // Employer WTR and public holiday
  EMPLOYER_WTR_AND_PUBLIC_HOLIDAY_READ = "employer-wtr-and-public-holidays",
  // Employer WTR
  EMPLOYER_WTR_CREATE = "employer-wtr/create",
  // Report
  REPORT_HISTOGRAM = "reports/histogram",
  REPORT_PLANNING = "reports/planning", // Available to everyone
  REPORT_TABLE = "reports/table",
}