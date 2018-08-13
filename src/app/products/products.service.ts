import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';

@Injectable()
export class ProductsService {
  products: Observable<any[]>;
  db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  listProducts() {
    this.products = this.db.collection('/products').valueChanges();

    return this.products;
  }

  addProduct(product) {
    console.log('product', product);

    // adiciona produto no banco
  }

  removeProduct(id) {
    // remove produto do banco
  }
}
