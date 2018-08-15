import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(public fireAuth: AngularFireAuth, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> {

    return new Promise((resolve, reject) => {
      this.fireAuth.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          this.router.navigate(['login']);
          reject('No user logged in');
        }
      });
    });
  }
}
