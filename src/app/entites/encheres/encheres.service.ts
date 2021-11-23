import { Injectable } from '@angular/core';
import { Encheres } from '../encheres/Encheres';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class EncheresService {
  encheresListRef: AngularFireList<any>;
  encheresRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createEncheres(ench: Encheres) {
    return this.encheresListRef.push({
      nomBien: ench.nomBien,
      description: ench.description,
      prix: ench.prix,
      dateCreation: ench.dateCreation,
      createur: ench.createur,
      encherisseurs: ench.encherisseurs,
      livraison: ench.livraison,
      statut: ench.statut
    });
  }

  // Get Single
  getEncheres(id: number) {
    this.encheresRef = this.db.object('/encheres/' + id);
    return this.encheresRef;
  }

  // Get List
  getEncheresList() {
    this.encheresListRef = this.db.list('/encheres');
    return this.encheresListRef;
  }

  // Update
  updateEncheres(id, ench: Encheres) {
    return this.encheresRef.update({
      nomBien: ench.nomBien,
      description: ench.description,
      prix: ench.prix,
      dateCreation: ench.dateCreation,
      createur: ench.createur,
      encherisseurs: ench.encherisseurs,
      livraison: ench.livraison,
      statut: ench.statut
    });
  }

  // Delete
  deleteEncheres(id: string) {
    this.encheresRef = this.db.object('/encheres/' + id);
    this.encheresRef.remove();
  }
}
