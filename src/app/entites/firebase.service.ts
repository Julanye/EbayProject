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

  // Creer une enchère
  createEncheres(ench) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      const date = new Date();
      const postData = {
        nomBien: ench.nomBien,
        description: ench.description,
        prix: ench.prix,
        dateCreation: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
        createur: currentUser.uid
      };
      const ref = firebase.database().ref('/encheres/');
      ref.push(postData);
      console.log(ench.nomBien, ench.description, ench.prix, ench.dateCreation, currentUser);
      console.log(postData);
    });
  }

  // Créer un encherisseur
  createEncherisseurs(encheri) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      const postData = {
        mail: currentUser.email,
        prixEnchere: encheri.prixEnchere,
      };
      const ref = firebase.database().ref('/encherisseurs/');
      ref.push(postData);
    });
  }

  // récupérer une enchère
  getEncheres(id: number) {
    this.encheresRef = this.db.object('/encheres/' + id);
    return this.encheresRef;
  }


  // récupérer liste d'enchères
  getEncheresList() {
    this.encheresListRef = this.db.list('/encheres');
    return this.encheresListRef;
  }

}

