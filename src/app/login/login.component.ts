import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../form/form.component.scss'
  ]
})

export class LoginComponent {
  constructor(private router: Router) {
    if (localStorage.getItem('currentUserId')) {
      this.router.navigate(['/list']);
    }
  }
}
