import {Role} from "./role";
import {User} from "./user";

export class Manager extends User {
  override role: Role = Role.MANAGER;
}