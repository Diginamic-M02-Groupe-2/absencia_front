import {Manager} from "./manager";
import {Role} from "./role";
import {User} from "./user";

export class Employee extends User {
  override role: Role = Role.EMPLOYEE;
  manager!: Manager;
}