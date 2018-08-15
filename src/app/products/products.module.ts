import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../button/button.module';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ListComponent,
    ProductComponent
  ],
  providers: [
    ProductsService
  ]
})

export class ProductsModule {}
