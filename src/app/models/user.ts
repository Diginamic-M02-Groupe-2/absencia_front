import { Role } from './user-role';
import { Service } from './user-service';

export class User {
  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  password!: string;
  roles!: Role[];
  service!: Service;
}
