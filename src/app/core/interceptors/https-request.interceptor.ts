import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
// import { AuthService } from 'src/app/modules/auth/auth.service';


@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    if (req.url.indexOf('/api') > 0) {

      let headers = new HttpHeaders();
      headers = headers.append('x-access-token', localStorage.getItem('token'));

      const request = req.clone({
        headers: headers,
      });

      // console.log('INTERCEPTOR');
      // console.log('token: ' + localStorage.getItem('token'));

      return next
        .handle(request)
        .pipe(
          tap((ev: HttpEvent<any>) => {
            if (ev instanceof HttpResponse) {
              // console.log('processing response', ev);
            }
          }),
          catchError(response => {
            if (response instanceof HttpErrorResponse) {
              if (response.status === 401) {
                // console.log('this should print your error!', response.error);
                // this.authService.logoutAuth();
              }
            }
            return throwError(response);
          })
        );

    }

    return next.handle(req);

  }
}
