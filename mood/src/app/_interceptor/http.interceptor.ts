import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, filter, finalize, switchMap, take} from "rxjs/operators";
import { TokenStorageService } from '../services/auth/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {
  private token = "secrettoken";
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokenStorageService: TokenStorageService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!!this.tokenStorageService.getToken()) {
      request = request.clone({
        setHeaders: { 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` }
      });
    }
    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true }
];

