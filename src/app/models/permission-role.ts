import { Role } from "../entities/user/role";

// permission.enum.ts
export enum Permission {
  // Absence request
  CAN_GET_ABSENCE_REQUEST = "CAN_GET_ABSENCE_REQUEST",
  CAN_POST_ABSENCE_REQUEST = "CAN_POST_ABSENCE_REQUEST",
  CAN_PATCH_ABSENCE_REQUEST = "CAN_PATCH_ABSENCE_REQUEST",
  CAN_DELETE_ABSENCE_REQUEST = "CAN_DELETE_ABSENCE_REQUEST",
  CAN_APPROVE_ABSENCE_REQUEST = "CAN_APPROVE_ABSENCE_REQUEST",
  CAN_REJECT_ABSENCE_REQUEST = "CAN_REJECT_ABSENCE_REQUEST",
  // Employer WTR
  CAN_READ_EMPLOYER_WTR = "CAN_READ_EMPLOYER_WTR",
  CAN_CREATE_EMPLOYER_WTR = "CAN_CREATE_EMPLOYER_WTR",
  CAN_UPDATE_EMPLOYER_WTR = "CAN_UPDATE_EMPLOYER_WTR",
  CAN_DELETE_EMPLOYER_WTR = "CAN_DELETE_EMPLOYER_WTR",
  // Public holiday
  CAN_GET_PUBLIC_HOLIDAYS = "CAN_GET_PUBLIC_HOLIDAYS",
  CAN_UPDATE_PUBLIC_HOLIDAY = "CAN_UPDATE_PUBLIC_HOLIDAY",
  // Report
  CAN_READ_HISTOGRAM_REPORT = "CAN_READ_HISTOGRAM_REPORT",
  CAN_READ_PLANNING_REPORT = "CAN_READ_PLANNING_REPORT",
  CAN_READ_TABLE_REPORT = "CAN_READ_TABLE_REPORT",

  // Path for Route (don't forget to add it on app.routes.ts)
  CAN_ROUTE_TO_POST_ABSENCE_REQUEST = "CAN_ROUTE_TO_POST_ABSENCE_REQUEST",
}

export const ALLOWED_PERMISSIONS: Record<Role, string[]> = {
  [Role.EMPLOYEE]: [
    Permission.CAN_GET_ABSENCE_REQUEST,
    Permission.CAN_POST_ABSENCE_REQUEST,
    Permission.CAN_ROUTE_TO_POST_ABSENCE_REQUEST,
    Permission.CAN_PATCH_ABSENCE_REQUEST,
    Permission.CAN_DELETE_ABSENCE_REQUEST,
    Permission.CAN_READ_EMPLOYER_WTR,
    Permission.CAN_GET_PUBLIC_HOLIDAYS,
    // Report
    Permission.CAN_READ_PLANNING_REPORT,
  ],
  [Role.ADMINISTRATOR]: [
    Permission.CAN_GET_ABSENCE_REQUEST,
    Permission.CAN_POST_ABSENCE_REQUEST,
    Permission.CAN_ROUTE_TO_POST_ABSENCE_REQUEST,
    Permission.CAN_PATCH_ABSENCE_REQUEST,
    Permission.CAN_DELETE_ABSENCE_REQUEST,
    Permission.CAN_READ_EMPLOYER_WTR,
    Permission.CAN_CREATE_EMPLOYER_WTR,
    Permission.CAN_UPDATE_EMPLOYER_WTR,
    Permission.CAN_DELETE_EMPLOYER_WTR,
    Permission.CAN_GET_PUBLIC_HOLIDAYS,
    Permission.CAN_UPDATE_PUBLIC_HOLIDAY,
    // Report
    Permission.CAN_READ_PLANNING_REPORT,
  ],
  [Role.MANAGER]: [
    Permission.CAN_GET_ABSENCE_REQUEST,
    Permission.CAN_POST_ABSENCE_REQUEST,
    Permission.CAN_ROUTE_TO_POST_ABSENCE_REQUEST,
    Permission.CAN_PATCH_ABSENCE_REQUEST,
    Permission.CAN_DELETE_ABSENCE_REQUEST,
    Permission.CAN_READ_EMPLOYER_WTR,
    Permission.CAN_GET_PUBLIC_HOLIDAYS,
    Permission.CAN_APPROVE_ABSENCE_REQUEST,
    Permission.CAN_REJECT_ABSENCE_REQUEST,
    Permission.CAN_READ_HISTOGRAM_REPORT,
    // Report
    Permission.CAN_READ_HISTOGRAM_REPORT,
    Permission.CAN_READ_PLANNING_REPORT,
    Permission.CAN_READ_TABLE_REPORT,
  ],
};