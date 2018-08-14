import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  onSubmitRegister(email, password) {
    console.log('register');
  }

  onSubmitLogin(email, password) {
    console.log('login');
  }
}
