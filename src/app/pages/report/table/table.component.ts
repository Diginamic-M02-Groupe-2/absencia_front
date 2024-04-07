import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Service, serviceOptions} from "../../../entities/user/service";
import {User} from "../../../entities/user/user";
import {Option} from "../../../models/option";
import {ApiRoute, HttpMethod} from "../../../services/api.service";
import {UserService} from "../../../services/user.service";

interface Conge {
  nom: string;
  service: Service; // Ajout de la propriété service
  [key: string]: string | undefined;
}

@Component({
  selector: "app-table-report",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.module.scss",
})
export class TableReportComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.GET;

  formAction: string = ApiRoute.REPORT_TABLE;

  services: Option[] = serviceOptions;

  conges: Conge[] = [
    { nom: 'John Doe', service: Service.MANAGEMENT, '1': 'C', '5': 'R', '10': 'F', '31': 'C', '20': 'R', '25': 'F', '30': 'C' },
    { nom: 'Jane Doe', service: Service.DEVELOPMENT, '24': 'C', '5': 'R', '10': 'F', '8': 'C', '20': 'R', '25': 'F', '22': 'C' },
    { nom: 'Johnny Doe', service: Service.DESIGN, '15': 'C', '5': 'R', '10': 'F', '19': 'C', '20': 'R', '25': 'F', '16': 'C' }
  ];

  jours: string[] = Array.from({ length: 31 }, (_, i) => (i + 1).toString()); // Jours du mois

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.formGroup = this.formBuilder.group({
      service: [null],
      month: [new Date()],
    });

    this.formGroup.valueChanges.subscribe(() => this.getTable());

    this.userService.getCurrentUser().subscribe((user: User) => {
      this.formGroup.patchValue({
        service: user.service,
      });
    });
  }

  async getTable(): Promise<void> {
    console.log("get table");
  }

  getCongeValue(conge: Conge, jour: string): string {
    return conge[jour] || ''; 
  }

  filterCongesByService(): Conge[] {
    return this.conges.filter(conge => conge.service === this.formGroup.get("service")?.value);
  }
}