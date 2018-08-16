import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './register.component.html',
  styleUrls: ['../form/form.component.scss']
})

export class RegisterComponent {
  constructor(private router: Router) {
    if (localStorage.getItem('currentUserId')) {
      this.router.navigate(['/list']);
    }
  }
}
