import {Role} from "./role";
import {User} from "./user";

export class Administrator extends User {
  override role: Role = Role.ADMINISTRATOR;
}