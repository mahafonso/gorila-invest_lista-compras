import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ProductsService {
  constructor(private db: AngularFirestore) {}

  listProducts() {
    return this.db.collection('/products', ref => ref.where('userId', '==', localStorage.getItem('currentUserId')));
  }

  addProduct(product) {
    return this.db.collection('/products').doc(this.db.createId()).set(
      { name: product.name, quantity: product.quantity, userId: localStorage.getItem('currentUserId')});
  }

  removeProduct(id) {
    return this.db.doc('/products/' + id).delete();
  }
}
