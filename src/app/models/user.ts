import { Role } from './user-roles';
import { Service } from './user-services';

export class User {
  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  password!: string;
  roles!: Role[];
  service!: Service;
}
