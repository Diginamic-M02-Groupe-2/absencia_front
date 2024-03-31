import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {serviceOptions} from "../../../entities/user/service";
import {GetHistogramResponse} from "../../../models/get-histogram-response";
import {Option} from "../../../models/option";
import {ApiRoute, HttpMethod} from "../../../services/api.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: "app-absence-request-histogram-report",
  styleUrl: "./histogram-report.component.module.scss",
  templateUrl: "./histogram-report.component.html",
})
export class AbsenceRequestHistogramReportComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.GET;

  formAction: string = ApiRoute.GET_ABSENCE_REQUEST_HISTOGRAM;

  services: Option[] = serviceOptions;

  datasets!: GetHistogramResponse;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.formGroup = this.formBuilder.group({
      period: [new Date(), [Validators.required]],
      service: [null, [Validators.required]],
    });

    this.userService.getCurrentUser().subscribe(user => {
      this.formGroup.patchValue({
        service: user.service,
      });
    });

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

  /**
   * @todo
   */
  postSubmit(response: any): void {}
}