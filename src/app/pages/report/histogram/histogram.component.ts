import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {Service, serviceOptions} from "../../../entities/user/service";
import {GetHistogramResponse, HistogramDataset} from "../../../models/get-histogram-response";
import {Option} from "../../../models/option";
import {ApiRoute, ApiService, HttpMethod} from "../../../services/api.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: "app-histogram-report",
  templateUrl: "./histogram.component.html",
  styleUrl: "./histogram.component.module.scss",
})
export class HistogramReportComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.GET;

  formAction: string = ApiRoute.REPORT_HISTOGRAM;

  services: Option[] = serviceOptions;

  defaultService?: Service;

  datasets: HistogramDataset[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private apiService: ApiService
  ) {
    this.formGroup = this.formBuilder.group({
      service: [null],
      month: [new Date()],
    });

    this.formGroup.valueChanges.subscribe(() => this.getHistogram());

    this.userService.getCurrentUser().subscribe(async (user) => {
      this.defaultService = user.service;

      this.formGroup.patchValue({
        service: this.defaultService,
      });
    });
  }

  async getHistogram(): Promise<void> {
    const queryParams = {
      month: this.formGroup.get("month")!.value.getMonth() + 1,
      year: this.formGroup.get("month")!.value.getFullYear(),
      service: this.getServiceNumberByLabel(this.formGroup.get("service")!.value),
    };

    const response = await firstValueFrom(this.apiService.get<GetHistogramResponse>(this.formAction, queryParams));

    this.datasets = response;
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