import { Component } from '@angular/core';

import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  products: ProductComponent[] = [];
  productsTemp = [];
  productsIdRemove = [];
  emptyList = true;

  constructor(private serviceProduct: ProductsService) {
    this.listProducts();
  }

  listProducts() {
    this.products = [];
    this.productsTemp = [];

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

  clickItem(id) {
    this.productsIdRemove.push(id);
  }
}
