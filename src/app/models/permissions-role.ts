import { Role } from '../entities/user/role';

export const PERMISSIONS = {
  //Absence-Request
  CAN_GET_ABSENCE_REQUEST: 'CAN_GET_ABSENCE_REQUEST',
  CAN_POST_ABSENCE_REQUEST: 'CAN_POST_ABSENCE_REQUEST',
  CAN_PATCH_ABSENCE_REQUEST: 'CAN_PATCH_ABSENCE_REQUEST',
  CAN_DELETE_ABSENCE_REQUEST: 'CAN_DELETE_ABSENCE_REQUEST',
  CAN_APPROVE_ABSENCE_REQUEST: 'CAN_APPROVE_ABSENCE_REQUEST',
  CAN_REJECT_ABSENCE_REQUEST: 'CAN_REJECT_ABSENCE_REQUEST',

  //EmployeeWtr
  CAN_GET_EMPLOYEE_WTR: 'CAN_GET_EMPLOYEE_WTR',
  CAN_POST_EMPLOYEE_WTR: 'CAN_POST_EMPLOYEE_WTR',
  CAN_PATCH_EMPLOYEE_WTR: 'CAN_PATCH_EMPLOYEE_WTR',
  CAN_DELETE_EMPLOYEE_WTR: 'CAN_DELETE_EMPLOYEE_WTR',

  //PublicHolidays
  CAN_GET_PUBLIC_HOLIDAYS: 'CAN_GET_PUBLIC_HOLIDAYS',
  CAN_PATCH_PUBLIC_HOLIDAYS: 'CAN_PATCH_PUBLIC_HOLIDAYS',

  //Path for Route (don't forget to add it on app.routes.ts)
  CAN_ROUTE_TO_POST_ABSENCE_REQUEST: 'CAN_ROUTE_TO_POST_ABSENCE_REQUEST',
};

export const ALLOWED_PERMISSIONS: Record<Role, string[]> = {
  [Role.EMPLOYEE]: [
    PERMISSIONS.CAN_GET_ABSENCE_REQUEST,
    PERMISSIONS.CAN_POST_ABSENCE_REQUEST,
    PERMISSIONS.CAN_ROUTE_TO_POST_ABSENCE_REQUEST,
    PERMISSIONS.CAN_PATCH_ABSENCE_REQUEST,
    PERMISSIONS.CAN_DELETE_ABSENCE_REQUEST,
    PERMISSIONS.CAN_GET_EMPLOYEE_WTR,
    PERMISSIONS.CAN_GET_PUBLIC_HOLIDAYS,
  ],
  [Role.ADMINISTRATOR]: [
    PERMISSIONS.CAN_GET_ABSENCE_REQUEST,
    PERMISSIONS.CAN_POST_ABSENCE_REQUEST,
    PERMISSIONS.CAN_ROUTE_TO_POST_ABSENCE_REQUEST,
    PERMISSIONS.CAN_PATCH_ABSENCE_REQUEST,
    PERMISSIONS.CAN_DELETE_ABSENCE_REQUEST,
    PERMISSIONS.CAN_GET_EMPLOYEE_WTR,
    PERMISSIONS.CAN_POST_EMPLOYEE_WTR,
    PERMISSIONS.CAN_PATCH_EMPLOYEE_WTR,
    PERMISSIONS.CAN_DELETE_EMPLOYEE_WTR,
    PERMISSIONS.CAN_GET_PUBLIC_HOLIDAYS,
    PERMISSIONS.CAN_PATCH_PUBLIC_HOLIDAYS,
  ],
  [Role.MANAGER]: [
    PERMISSIONS.CAN_GET_ABSENCE_REQUEST,
    PERMISSIONS.CAN_POST_ABSENCE_REQUEST,
    PERMISSIONS.CAN_ROUTE_TO_POST_ABSENCE_REQUEST,
    PERMISSIONS.CAN_PATCH_ABSENCE_REQUEST,
    PERMISSIONS.CAN_DELETE_ABSENCE_REQUEST,
    PERMISSIONS.CAN_GET_EMPLOYEE_WTR,
    PERMISSIONS.CAN_GET_PUBLIC_HOLIDAYS,
    PERMISSIONS.CAN_APPROVE_ABSENCE_REQUEST,
    PERMISSIONS.CAN_REJECT_ABSENCE_REQUEST,
  ],
};
