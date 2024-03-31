import {Component} from "@angular/core";
import {Service} from "../../../entities/user/service";
import {GetHistogramResponse} from "../../../models/get-histogram-response";

@Component({
  selector: "app-absence-request-histogram-report",
  templateUrl: "./histogram-report.component.html",
})
export class AbsenceRequestHistogramReportComponent {
  year!: number;

  month!: number;

  service?: Service;

  datasets!: GetHistogramResponse;

  constructor() {
    const date = new Date();

    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;

    this.getHistogramDatasets();
  }

  async getHistogramDatasets(): Promise<void> {
    const response: GetHistogramResponse = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        data: Array.from({length: 31}, () => Math.random() * 2 | 0),
      }, {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        data: Array.from({length: 31}, () => Math.random() * 2 | 0),
      }, {
        id: 3,
        firstName: "Johnny",
        lastName: "Doe",
        data: Array.from({length: 31}, () => Math.random() * 2 | 0),
      },
    ];

    this.datasets = response;
  }
}