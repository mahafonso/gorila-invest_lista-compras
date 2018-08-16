import { Component, Input } from '@angular/core';

import { FormService } from './form.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  @Input() id: string;
  @Input() styleClass: string;
  @Input() title: string;
  @Input() linkRouter: string;
  @Input() textRouter: string;
  errorMessage = '';
  authenticationError = false;

  constructor(private formService: FormService, private authenticationService: AuthenticationService) {
    this.authenticationService.errorMessageChanged.subscribe(value => {
      this.errorMessage = value;
    });

    this.authenticationService.authenticationErrorChanged.subscribe(value => {
      this.authenticationError = value;
    });
  }

  onSubmitForm(value) {
    this.formService.onSubmitForm(this.id, value);
  }
}
