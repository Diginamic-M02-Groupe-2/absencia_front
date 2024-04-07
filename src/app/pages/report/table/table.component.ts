import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {Service, serviceOptions} from "../../../entities/user/service";
import {User} from "../../../entities/user/user";
import {GetTableReportResponse} from "../../../models/get-table-report-response";
import {Option} from "../../../models/option";
import {ApiRoute, ApiService, HttpMethod} from "../../../services/api.service";
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

  table?: GetTableReportResponse;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
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
    const queryParameters = {
      month: this.formGroup.get("month")!.value.getMonth() + 1,
      year: this.formGroup.get("month")!.value.getFullYear(),
      service: this.getServiceNumberByLabel(this.formGroup.get("service")!.value),
    };

    this.table = await firstValueFrom(this.apiService.get<GetTableReportResponse>(this.formAction, queryParameters));
  }

  getCongeValue(conge: Conge, jour: string): string {
    return conge[jour] || ''; 
  }

  filterCongesByService(): Conge[] {
    return this.conges.filter(conge => conge.service === this.formGroup.get("service")?.value);
  }

  private getServiceNumberByLabel(label: string): undefined|number {
    const serviceKeys = Object.keys(Service);

    for (let i = 0; i < serviceKeys.length; i++) {
      if (Service[serviceKeys[i] as keyof typeof Service] === label) {
        return i;
      }
    }

    return undefined;
  }
}