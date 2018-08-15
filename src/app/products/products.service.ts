import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ProductsService {
  currentUserId;

  constructor(public fireAuth: AngularFireAuth, public db: AngularFirestore) {
    this.currentUserId = localStorage.getItem('currentUserId');
  }

  listProducts() {
    return this.db.collection('/products', ref => ref.where('userId', '==', this.currentUserId));
  }

  addProduct(product) {
    return this.db.collection('/products').doc(this.db.createId()).set(
      { name: product.name, quantity: product.quantity, userId: this.currentUserId});
  }

  removeProduct(id) {
    return this.db.doc('/products/' + id).delete();
  }
}
