import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CacheServiceService } from '../Services/cache-service-service.service';

@Injectable()
export class LoginGaurdGuard implements CanActivate {

  constructor(private  cacheService : CacheServiceService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if (this.cacheService.loggedIn == true) {
    //   return true  ;
    // }else {
    //   return false ;
    // }
    return true;
  }
}
