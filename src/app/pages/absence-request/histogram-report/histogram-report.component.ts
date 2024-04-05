import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service, serviceOptions } from '../../../entities/user/service';
import { GetHistogramResponse } from '../../../models/get-histogram-response';
import { Option } from '../../../models/option';
import {
  ApiRoute,
  ApiService,
  HttpMethod,
} from '../../../services/api.service';
import { UserService } from '../../../services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-absence-request-histogram-report',
  styleUrl: './histogram-report.component.module.scss',
  templateUrl: './histogram-report.component.html',
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
    private apiService: ApiService
  ) {
    this.formGroup = this.formBuilder.group({
      period: [new Date(), [Validators.required]],
      service: [null, [Validators.required]],
    });

    this.userService.getCurrentUser().subscribe(async (user) => {
      const userService = user.service;
      const selectedOption = serviceOptions.find(
        (option) =>
          option.value.toLowerCase() === userService.toLocaleLowerCase()
      );
      this.formGroup.patchValue({
        service: selectedOption!.value,
      });
      await this.getHistogramDatasets();
    });
  }

  async getHistogramDatasets(): Promise<void> {
    const serviceNumber = this.getServiceNumberByLabel(
      this.formGroup.value.service
    );
    const date = new Date();
    const queryParams = {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      service: serviceNumber,
    };
    const response = await firstValueFrom(
      this.apiService.get<GetHistogramResponse>(this.formAction, queryParams)
    );

    this.datasets = response;
  }

  async onSubmit(): Promise<void> {
    const formData = this.formGroup.value;
    const serviceNumber = this.getServiceNumberByLabel(formData.service);

    const queryParams = {
      month: formData.period.getMonth() + 1,
      year: formData.period.getFullYear(),
      service: serviceNumber,
    };

    const response = await firstValueFrom(
      this.apiService.get<GetHistogramResponse>(this.formAction, queryParams)
    );

    this.datasets = response;
  }

  onDateChanged(newDate: any) {
    this.formGroup.get("dateControl")?.setValue(newDate);
    this.onSubmit();
  }

  onSelectionChanged(newSelection: any) {
    this.formGroup.get("selectControl")?.setValue(newSelection);
    this.onSubmit();
  }

  getServiceNumberByLabel(label: string): number | undefined {
    const serviceKeys = Object.keys(Service);
    for (let i = 0; i < serviceKeys.length; i++) {
      if (Service[serviceKeys[i] as keyof typeof Service] === label) {
        return i;
      }
    }
    return undefined;
  }
}
