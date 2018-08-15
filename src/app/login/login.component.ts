import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  errorMessage: string;
  authenticationError = false;

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  onSubmitLogin(value) {
    this.fireAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(user => {
        localStorage.setItem('currentUserId', this.fireAuth.auth.currentUser.uid);

        this.authenticationError = false;

        this.router.navigate(['list']);
      }).catch(error => {
        this.authenticationError = true;

        if (error.code.indexOf('user-not-found') >= 0) {
          this.errorMessage = 'E-mail não encontrado!';
        } else if (error.code.indexOf('invalid-email') >= 0) {
          this.errorMessage = 'E-mail inválido!';
        } else if (error.code.indexOf('wrong-password') >= 0) {
          this.errorMessage = 'Senha errada!';
        }
      });
  }
}
