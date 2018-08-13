import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../products/product/product.component';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-form-new',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  submitted = false;
  product: ProductComponent = new ProductComponent();
  serviceProduct: ProductsService;

  onSubmit(product) {
    this.submitted = true;

    this.serviceProduct.addProduct(product);

    this.product = new ProductComponent();
  }
}
