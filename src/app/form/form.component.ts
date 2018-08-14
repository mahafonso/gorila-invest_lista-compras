import { Component } from '@angular/core';

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

  constructor(public serviceProduct: ProductsService) {}

  addProduct(event) {
    event.preventDefault();

    this.submitted = true;

    this.serviceProduct.addProduct(this.product).then(() => {
      this.product = new ProductComponent();
    });
  }
}
