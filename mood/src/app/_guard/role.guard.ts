import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor( 
    private tokenStorageService: TokenStorageService,
    private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.data['authorizedRole'].indexOf(this.tokenStorageService.getRole()) === -1) {
      this.tokenStorageService.getRole() === 'ROLE_ADMIN' ? this.router.navigate(['/admin/*']) : this.router.navigate(['/']);
    }
    return route.data['authorizedRole'].indexOf(this.tokenStorageService.getRole()) !== -1;
  }

}
