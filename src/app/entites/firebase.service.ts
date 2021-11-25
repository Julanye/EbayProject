import {Injectable} from '@angular/core';
import {Encherisseurs} from '../entites/encherisseurs/Encherisseurs';
import {Encheres} from '../entites/encheres/Encheres';
import {Livraison} from '../entites/livraison/Livraison';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  encheresListRef: AngularFireList<any>;
  encheresRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
  }

  // Create
  /*
  createEncheres(ench: Encheres) {
    console.log(ench.nomBien, ench.description, ench.prix);
    console.log(this.encheresListRef);
    return this.encheresListRef.push({
      nomBien: ench.nomBien,
      description: ench.description,
      prix: ench.prix
      //dateCreation: sysdate,
      //createur: ench.createur,
      //encherisseurs: null,
      //livraison: null,
      //statut: 'en cours';
    });
  }
   */
  async createEncheres(ench) {
    console.log(this.db.database.ref());
    console.log(ench.nomBien, ench.description, ench.prix);
    return new Promise<any>(async (resolve, reject) => {
      const postData = {
        nomBien: ench.nomBien,
        description: ench.description,
        prix: ench.prix
      };
      await this.db.object('enchere').set(postData);
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
}

