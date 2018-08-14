import { Component } from '@angular/core';

import { ProductsService } from '../products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  productsTemp = [];
  products = [];

  constructor(public serviceProduct: ProductsService) {
    this.listProducts();
  }

  listProducts() {
    this.serviceProduct.listProducts().valueChanges().subscribe(data => {
      this.productsTemp = data;

      this.serviceProduct.listProducts().snapshotChanges().subscribe(dataId => {
        dataId.map((item, index) => {
          this.productsTemp[index].id = item.payload.doc.id;
        });

        this.products = this.productsTemp;
      });
    });
  }

  removeProduct(id) {
    this.serviceProduct.removeProduct(id).then(() => {
      this.listProducts();
    });
  }
}
