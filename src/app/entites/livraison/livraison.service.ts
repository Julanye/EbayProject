/*
import { Injectable } from '@angular/core';
import { Livraison } from '../livraison/livraison';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class LivraisonService {
  livraisonListRef: AngularFireList<any>;
  livraisonRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createLivraison(livr: Livraison) {
    return this.livraisonListRef.push({
      date: livr.date,
      lieu: livr.lieu,
      mailAch: livr.mailAch
    });
  }

  // Get Single
  getLivraison(id: number) {
    this.livraisonRef = this.db.object('/livraison/' + id);
    return this.livraisonRef;
  }

  // Get List
  getLivraisonList() {
    this.livraisonListRef = this.db.list('/livraison');
    return this.livraisonListRef;
  }
}
 */
