import {HttpClient} from "@angular/common/http";
import {Component} from "@angular/core";
import {MessageService} from "primeng/api";
import {Observable} from "rxjs";
import {AbsenceRequest} from "../../../models/absence-request";
import {GetAbsenceRequestResponse} from "../../../models/get-absence-request-response";
import {Route} from "../../../models/route";
import {GET_ABSENCE_REQUESTS} from "../../../services/api.service";

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

  response: Observable<GetAbsenceRequestResponse>;

  constructor(
    private http: HttpClient,
  ) {
    this.response = this.http.get<GetAbsenceRequestResponse>(GET_ABSENCE_REQUESTS);
  }

  async deleteAbsenceRequest(absenceRequest: AbsenceRequest): Promise<void> {}
}