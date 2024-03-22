import { Component } from '@angular/core';
import { AbsenceRequest } from '../../../models/absence-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_ABSENCE_REQUESTS } from '../../../services/api.service';

@Component({
  selector: 'app-absence-request-list',
  templateUrl: './absence-request-list.component.html',
  styleUrl: './absence-request-list.component.scss'
})
export class AbsenceRequestListComponent {

  absenceRequests$: Observable<Array<AbsenceRequest>> | undefined;
  currentUser = JSON.parse(sessionStorage.getItem('currentUser')!)

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.absenceRequests$ = this.getAbsenceRequests();
  }

  getAbsenceRequests(): Observable<Array<AbsenceRequest>> {
    return this.http.get<Array<AbsenceRequest>>(GET_ABSENCE_REQUESTS + "/"+ this.currentUser.id)
  }

}
