import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  encheresRef: AngularFireObject<any>;
  myEncheresList: Array<{ id: string; nomBien: string; description: string; prix: string }> = [];
  myAchatsList: Array<{ id: string; nomBien: string; description: string; prix: string }> = [];
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
    });
  }

  // update car on vient remplacer l'ancien enchérisseur lorsque le prix est supérieur
  updateEncherisseurs(encheri, idEnch) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      const postData = {
        mail: currentUser.email,
        prixEnchere: encheri.prixEnchere,
        idEnchere: idEnch
      };
      const ref = firebase.database().ref('/encheres/encherisseurs/');
      ref.push(postData);
    });
  }

  // récupérer une enchère
  getEncherisseur(idEnchere) {
    return new Promise<any>((resolve, reject) => {
      const starCountRef = firebase.database().ref('/encheres/' + idEnchere + '/encherisseurs/');
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

  // récupérer une enchère grâce à son id
  //TODO : ça n'a pas l'air de fonctionner, to fix
  getEnchere(idEnchere: string) {
    return new Promise<any>((resolve, reject) => {
      const starCountRef = firebase.database().ref('/encheres/' + idEnchere);
      starCountRef.on('value', snapshot => {
        resolve(snapshot.val());
      });
    });
  }

  // récupérer liste d'enchères
  getEncheresList() {
    return new Promise<any>((resolve, reject) => {
        const starCountRef = firebase.database().ref('/encheres/');
        starCountRef.on('value', snapshot => {
          resolve(snapshot.val());
        });
      }
    );
  }

  // récupérer liste d'enchères de l'utilisateur connecté
  getMyEncheresList() {
    const currentUser = firebase.auth().currentUser;
    const query = firebase.database().ref('/encheres/')
      .orderByChild('createur')
      .equalTo(currentUser.uid)
      .on('child_added', snapshot => {
        this.myEncheresList.push(snapshot.val());
      });
    return this.myEncheresList;
  }

  // récupérer liste d'enchères de l'utilisateur connecté
  getMyAchatsList() {
    const currentUser = firebase.auth().currentUser;
    const query = firebase.database().ref('/encheres/')
      .orderByChild('acheteur')
      .equalTo(currentUser.uid)
      .on('child_added', snapshot => {
        this.myAchatsList.push(snapshot.val());
      });
    return this.myAchatsList;
  }

  /**
   * Récupérer les informations d'un utilisateur précis
   */
  getUserInformation() {
    const currentUser = firebase.auth().currentUser;
    return new Promise<any>((resolve, reject) => {
      const starCountRef = firebase.database().ref('/utilisateur/' + currentUser.uid);
      starCountRef.on('value', snapshot => {
        resolve(snapshot.val());
      });
    });
  }


}
