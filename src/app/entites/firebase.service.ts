import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  encheresListRef: AngularFireList<any>;
  encheresRef: AngularFireObject<any>;
  mailEncherisseur: string;

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

  // update car on vient remplacer l'ancien enchérisseur lorsque le prix est supérieur
  updateEncherisseurs(encheri, idEnchere) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      const postData = {
        mail: currentUser.email,
        prixEnchere: encheri.prixEnchere,
        idEnchere:  idEnchere
      };
      const ref = firebase.database().ref('/encheres/encherisseurs/');
      ref.push(postData);
    });
  }

  // récupérer une enchère
  getEncherisseur(idEnchere) {
    return new Promise<any>((resolve, reject) => {
      const starCountRef = firebase.database().ref('/encheres/'+idEnchere+'/encherisseurs/');
      starCountRef.on('value', snapshot => {
        resolve(snapshot.val());
      });
    });
  }

  // Créer une livraison
  createLivraison(liv, idEnchere, encherisseur) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      const postData = {
        date: liv.date,
        lieu: liv.lieu,
        mailAch: encherisseur
      };
      const ref = firebase.database().ref('/encheres/livraison/');
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
    return new Promise<any>((resolve, reject) => {
        const starCountRef = firebase.database().ref('/encheres/');
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        starCountRef.on('value', function (snapshot) {
          resolve(snapshot.val());
        });
      }
    );
  }

}
