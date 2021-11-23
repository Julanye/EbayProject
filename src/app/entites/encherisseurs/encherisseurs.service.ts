import { Injectable } from '@angular/core';
import { Encherisseurs } from '../encherisseurs/encherisseurs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class EncherisseursService {
  encherisseursListRef: AngularFireList<any>;
  encherisseursRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createEncherisseurs(ench: Encherisseurs) {
    return this.encherisseursListRef.push({
      mail: ench.mail,
      prixEnchere: ench.prixEnchere,
    });
  }

  // Get Single
  getEncherisseurs(id: number) {
    this.encherisseursRef = this.db.object('/encherisseurs/' + id);
    return this.encherisseursRef;
  }

  // Get List
  getEncherisseursList() {
    this.encherisseursListRef = this.db.list('/encherisseurs');
    return this.encherisseursListRef;
  }
}
