import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { ButtonModule } from '../button/button.module';

import { FormService } from './form.service';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    ButtonModule
  ],
  exports: [
    FormComponent
  ],
  providers: [
    FormService
  ]
})

export class FormModule { }
