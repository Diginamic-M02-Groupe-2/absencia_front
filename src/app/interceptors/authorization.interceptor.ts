import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiRoute} from "../services/api.service";
import {TOKEN} from "../services/authentification.service";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes(ApiRoute.LOGIN)) {
      return next.handle(request);
    }

    const token = sessionStorage.getItem(TOKEN);

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}