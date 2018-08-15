import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  logout() {
    this.fireAuth.auth.signOut().then(user => {
      localStorage.removeItem('currentUserId');

      this.router.navigate(['']);
    });
  }
}
