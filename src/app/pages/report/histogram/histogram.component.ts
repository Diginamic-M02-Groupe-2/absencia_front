import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {Service, serviceOptions} from "../../../entities/user/service";
import {GetHistogramReportResponse, HistogramDataset} from "../../../models/get-histogram-report-response";
import {Option} from "../../../models/option";
import {ApiRoute, ApiService, HttpMethod} from "../../../services/api.service";
import {UserService} from "../../../services/user.service";
import { User } from "../../../entities/user/user";

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

  datasets: HistogramDataset[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private userService: UserService,
  ) {
    this.formGroup = this.formBuilder.group({
      service: [null],
      month: [new Date()],
    });

    this.formGroup.valueChanges.subscribe(() => this.getHistogram());

    this.userService.getCurrentUser().subscribe((user: User) => {
      this.formGroup.patchValue({
        service: user.service,
      });
    });
  }

  async getHistogram(): Promise<void> {
    const queryParameters = {
      month: this.formGroup.get("month")!.value.getMonth() + 1,
      year: this.formGroup.get("month")!.value.getFullYear(),
      service: this.getServiceNumberByLabel(this.formGroup.get("service")!.value),
    };

    this.datasets = await firstValueFrom(this.apiService.get<GetHistogramReportResponse>(this.formAction, queryParameters));
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