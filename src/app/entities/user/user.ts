import {Role} from "./role";
import {Service} from "./service";

export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  role!: Role;
  service!: Service;
}