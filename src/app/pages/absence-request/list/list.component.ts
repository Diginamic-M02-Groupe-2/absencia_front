import {Component} from "@angular/core";
import {MessageService} from "primeng/api";
import {Observable, map} from "rxjs";
import {AbsenceRequest} from "../../../models/absence-request";
import {GetAbsenceRequestResponse} from "../../../models/get-absence-request-response";
import {Route} from "../../../models/route";
import {ApiRoute, ApiService} from "../../../services/api.service";

@Component({
  selector: "app-absence-request-list",
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.module.scss",
  providers: [
    MessageService,
  ],
})
export class AbsenceRequestListComponent {
  absenceRequestNewRoute: Route = Route.ABSENCE_REQUEST_CREATE;

  absenceRequests: Observable<AbsenceRequest[]>;

  remainingPaidLeaves: Observable<number>;

  remainingEmployeeWtr: Observable<number>;

  constructor(
    private apiService: ApiService,
  ) {
    const response = this.apiService.get<GetAbsenceRequestResponse>(ApiRoute.ABSENCE_REQUEST);

    this.absenceRequests = response.pipe(
      map(response => response.absenceRequests as AbsenceRequest[]),
    );

    this.remainingPaidLeaves = response.pipe(
      map(response => response.remainingPaidLeaves as number),
    );

    this.remainingEmployeeWtr = response.pipe(
      map(response => response.remainingEmployeeWtr as number),
    );
  }

  async deleteAbsenceRequest(absenceRequest: AbsenceRequest): Promise<void> {}
}