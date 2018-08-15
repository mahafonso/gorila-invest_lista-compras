import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../form/form.component.scss'
  ]
})

export class RegisterComponent {
  errorMessage: string;
  authenticationError = false;

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  onSubmitRegister(value) {
    this.fireAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(user => {
        localStorage.setItem('currentUserId', this.fireAuth.auth.currentUser.uid);

        this.authenticationError = false;

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
      });
  }
}
