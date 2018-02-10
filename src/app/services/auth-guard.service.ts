import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuardService {

  public allowed: boolean = false;

  constructor(
    private af:AngularFireAuth,
    private router:Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.af.authState.map((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }).first()
  }

}
