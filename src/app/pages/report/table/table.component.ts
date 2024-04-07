import {Component} from "@angular/core";
import {Service, serviceOptions} from "../../../entities/user/service";
import {Option} from "../../../models/option";

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
  months: string[] = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  years: number[] = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

  selectedService: Service | undefined;
  selectedMonth: string | undefined;
  selectedYear: number | undefined;
  conges: Conge[] = [
    { nom: 'John Doe', service: Service.MANAGEMENT, '1': 'C', '5': 'R', '10': 'F', '31': 'C', '20': 'R', '25': 'F', '30': 'C' },
    { nom: 'Jane Doe', service: Service.DEVELOPMENT, '24': 'C', '5': 'R', '10': 'F', '8': 'C', '20': 'R', '25': 'F', '22': 'C' },
    { nom: 'Johnny Doe', service: Service.DESIGN, '15': 'C', '5': 'R', '10': 'F', '19': 'C', '20': 'R', '25': 'F', '16': 'C' }
  ];

  jours: string[] = Array.from({ length: 31 }, (_, i) => (i + 1).toString()); // Jours du mois

  serviceOptions: Option[] = serviceOptions;

  getCongeValue(conge: Conge, jour: string): string {
    return conge[jour] || ''; 
  }

  filterCongesByService(): Conge[] {
    if (!this.selectedService) {
      return this.conges;
    }
    return this.conges.filter(conge => conge.service === this.selectedService);
  }
}