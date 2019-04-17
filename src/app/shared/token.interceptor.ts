import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      withCredentials: true
      });
    // const re = /login/gi;
    // // Exclude interceptor for login request:
    // if (request.url.search(re) === -1) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Basic ${this.auth.getToken()}`
    //     }
    //   });
    // }
    return next.handle(request);
  }
}
