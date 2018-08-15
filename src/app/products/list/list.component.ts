import { Component } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  productsTemp = [];
  products = [];
  productsIdRemove = [];
  emptyList = true;

  constructor(public serviceProduct: ProductsService) {
    this.listProducts();
  }

  clickItem(id) {
    this.productsIdRemove.push(id);
  }

  listProducts() {
    this.serviceProduct.listProducts().valueChanges().subscribe(data => {
      if (data.length > 0) {
        this.emptyList = false;
      } else {
        this.emptyList = true;
      }

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

  removeSelectedProducts() {
    this.productsIdRemove.forEach(item => {
      this.removeProduct(item);
    });
  }

  removeAllProducts() {
    this.products.forEach(item => {
      this.removeProduct(item.id);
    });
  }
}
