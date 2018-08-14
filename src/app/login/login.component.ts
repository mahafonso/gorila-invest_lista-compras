import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(public authService: AuthService) { }

  onSubmitLogin(value) {
    console.log('value', value);
    this.authService.doLogin(value)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
