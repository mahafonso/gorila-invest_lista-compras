import { Injectable } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Injectable()
export class FormService {
  constructor(private authenticationService: AuthenticationService) { }

  onSubmitForm(id, value) {
    this.authenticationService.onSubmitForm(id, value);
  }
}
