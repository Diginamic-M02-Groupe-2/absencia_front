import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiRoute, ApiService} from "./api.service";
import {User} from "../entities/user/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private apiService: ApiService,
  ) {}

  getCurrentUser(): Observable<User> {
    return this.apiService.get<User>(ApiRoute.GET_CURRENT_USER);
  }
}