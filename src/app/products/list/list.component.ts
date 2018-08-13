import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  serviceProduct: ProductsService;
  listProducts: ProductComponent[];
  isOk = false;

  constructor(serviceProduct: ProductsService) {
    this.serviceProduct = serviceProduct;

    this.serviceProduct.listProducts().subscribe(data => {
      this.listProducts = data;

      this.isOk = true;

      console.log('listProducts', this.listProducts);
    });
  }

  removeProduct(id) {
    this.serviceProduct.removeProduct(id);
  }
}
