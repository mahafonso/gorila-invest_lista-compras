import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  constructor(public authService: AuthService) {}

  onSubmitRegister(value) {
    console.log('value', value);
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
