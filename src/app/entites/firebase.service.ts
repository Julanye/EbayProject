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

  /**
   * Creer une enchère
   *
   * @param ench l'enchère à créer
   */
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

  /**
   * Met à jour le prix d'une enchère et les informations de l'encherisseur
   *
   * @param prixEnch le nouveau prix de l'enchère
   * @param idEnchere l'id de l'enchère à mettre à jour
   */
  updateEnchere(prixEnch, idEnchere){
    const starCountRef = firebase.database().ref('/encheres/' + idEnchere);
    starCountRef.update({
      prix: prixEnch
    });
    this.updateEncherisseurs(prixEnch, idEnchere);
  }

  /**
   * Met à jour l'encherisseur d'une enchère
   *
   * @param prixEnch le nouveau prix de l'enchère
   * @param idEnchere l'id de l'enchère mise à jour
   */
  updateEncherisseurs(prixEnch, idEnchere) {
      const currentUser = firebase.auth().currentUser;
      const starCountRef = firebase.database().ref('/encheres/encherisseurs/'+idEnchere);
      starCountRef.update({
        prix: prixEnch,
        idEncherisseur: currentUser.uid,
        mailEnch: currentUser.email
      });
  }

  /**
   * Récupérer un encherisseur
   *
   * @param idEnchere l'id de l'enchère
   */
  getEncherisseur(idEnchere) {
    return new Promise<any>((resolve, reject) => {
      const starCountRef = firebase.database().ref('/encheres/encherisseurs/'+idEnchere);
      starCountRef.on('value', snapshot => {
        resolve(snapshot.val());
      });
    });
  }

  /**
   * Créer une livraison
   *
   * @param lieuChoisi le lieu de livraison choisi
   * @param dateChoisie la date de livraison choisie
   * @param idEnch l'id de l'enchère à livrer
   * @param mailAch le mail de l'acheteur
   */
  updateLivraison(lieuChoisi, dateChoisie, idEnch, mailAch) {
    const currentUser = firebase.auth().currentUser;
    const starCountRef = firebase.database().ref('/encheres/livraison/'+idEnch);
    starCountRef.update({
      date: dateChoisie,
      lieu: lieuChoisi,
      mailAcheteur: mailAch,
      mailCreateur: currentUser.email
    });
  }

  /**
   * Récupère la livraison d'une enchère
   *
   * @param idEnch l'id de l'enchère à livrer
   */
  getLivraison(idEnch){
    return new Promise<any>((resolve, reject) => {
      const starCountRef = firebase.database().ref('/encheres/livraison/'+idEnch);
      starCountRef.on('value', snapshot => {
        resolve(snapshot.val());
      });
    });
  }

  /**
   * Récupérer une enchère grâce à son id
   *
   * @param idEnchere l'id de l'enchère à récupérer
   */
  getEnchere(idEnchere: string) {
    return new Promise<any>((resolve, reject) => {
      const starCountRef = firebase.database().ref('/encheres/' + idEnchere);
      starCountRef.on('value', snapshot => {
        resolve(snapshot.val());
      });
    });
  }

  /**
   * Récupérer liste d'enchères
   */
  getEncheresList() {
    return new Promise<any>((resolve, reject) => {
        const starCountRef = firebase.database().ref('/encheres/');
        starCountRef.on('value', snapshot => {
          resolve(snapshot.val());
        });
      }
    );
  }

  /**
   * Récupérer liste d'enchères de l'utilisateur connecté
   */
  getMyEncheresList() {
    const currentUser = firebase.auth().currentUser;
    //OUI le reset de la liste est très MOCHE, mais je m'y attarderai plus tard, un peu de pitié :(
    this.myEncheresList = [];
    firebase.database().ref('/encheres/')
      .orderByChild('createur')
      .equalTo(currentUser.uid)
      .on('child_added', snapshot => {
        this.myEncheresList.push({description: snapshot.val().description,
          id: snapshot.key, nomBien: snapshot.val().nomBien, prix: snapshot.val().prix });
      });
    return this.myEncheresList;
  }

  /**
   * Récupérer liste d'enchères de l'utilisateur connecté
   */
  getMyAchatsList() {
    const currentUser = firebase.auth().currentUser;
    this.myAchatsList = [];
    firebase.database().ref('/encheres')
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
