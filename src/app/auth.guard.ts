import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./service/auth.service";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authSrv: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSrv.isAuthenticated().then((logged) => {
      if (logged) {
        return true;
      }
      // this.router.navigate(['/'])
      return this.router.createUrlTree(["/"]);
    });
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route, state);
  }
}
