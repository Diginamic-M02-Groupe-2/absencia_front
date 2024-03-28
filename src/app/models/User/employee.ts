import { Manager } from './manager';
import { User } from './user';

export class Employee extends User {
  // Propriétés spécifiques à l'employé
  manager!: Manager;
}
