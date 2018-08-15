import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ListComponent, ProductComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ProductComponent, ListComponent],
  providers: [ProductsService]
})

export class ProductsModule {}
