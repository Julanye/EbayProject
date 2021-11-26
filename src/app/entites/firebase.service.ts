import {Injectable} from '@angular/core';
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
  createEncheres(ench) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      const date = new Date();
      const postData = {
        nomBien: ench.nomBien,
        description: ench.description,
        prix: ench.prix,
        dateCreation: date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),
        createur: currentUser.uid
      };
      const ref = firebase.database().ref('/encheres/');
      ref.push(postData);
      console.log(ench.nomBien, ench.description, ench.prix, ench.dateCreation, currentUser);
      console.log(postData);
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

