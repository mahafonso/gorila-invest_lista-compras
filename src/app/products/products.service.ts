import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ProductsService {
  constructor(public db: AngularFirestore) {}

  listProducts() {
    return this.db.collection('/products');
  }

  addProduct(product) {
    return this.db.collection('/products').doc(this.db.createId()).set({name: product.name, quantity: product.quantity});
  }

  removeProduct(id) {
    return this.db.doc('/products/' + id).delete();
  }
}
