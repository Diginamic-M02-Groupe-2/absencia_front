import { Service } from './user-service';

export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password?: string;
  service!: Service;
}
