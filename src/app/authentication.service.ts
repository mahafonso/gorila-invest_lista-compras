import { Injectable, EventEmitter } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  errorMessage: string;
  errorMessageChanged: EventEmitter<string> = new EventEmitter();
  authenticationError = false;
  authenticationErrorChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  onSubmitForm(id, value) {
    if (id.indexOf('login') >= 0) {
      this.onSubmitLogin(value);
    } else if (id.indexOf('register') >= 0) {
      this.onSubmitRegister(value);
    }
  }

  onSubmitLogin(value) {
    this.fireAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(user => {
        localStorage.setItem('currentUserId', this.fireAuth.auth.currentUser.uid);

        this.authenticationError = false;

        this.authenticationErrorChanged.emit(this.authenticationError);

        this.router.navigate(['/list']);
      }).catch(error => {
        this.authenticationError = true;

        if (error.code.indexOf('user-not-found') >= 0) {
          this.errorMessage = 'E-mail não encontrado!';
        } else if (error.code.indexOf('invalid-email') >= 0) {
          this.errorMessage = 'E-mail inválido!';
        } else if (error.code.indexOf('wrong-password') >= 0) {
          this.errorMessage = 'Senha errada!';
        }

        this.authenticationErrorChanged.emit(this.authenticationError);
        this.errorMessageChanged.emit(this.errorMessage);
      });
  }

  onSubmitRegister(value) {
    this.fireAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(user => {
        localStorage.setItem('currentUserId', this.fireAuth.auth.currentUser.uid);

        this.authenticationError = false;

        this.authenticationErrorChanged.emit(this.authenticationError);

        this.router.navigate(['/list']);
      }).catch(error => {
        this.authenticationError = true;

        if (error.code.indexOf('email-already-in-use') >= 0) {
          this.errorMessage = 'E-mail já cadastrado!';
        } else if (error.code.indexOf('invalid-email') >= 0) {
          this.errorMessage = 'E-mail inválido!';
        } else if (error.code.indexOf('weak-password') >= 0) {
          this.errorMessage = 'Senha deve ter no mínimo 6 caracteres!';
        }

        this.authenticationErrorChanged.emit(this.authenticationError);
        this.errorMessageChanged.emit(this.errorMessage);
      });
  }
}
