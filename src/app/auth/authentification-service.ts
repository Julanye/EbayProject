import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  /**
   * Connexion à partir de l'adresse mail et du mot de passse
   *
   * @param email adresse mail de connexion
   * @param password mot de passe
   */
  signIn(email, password) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Inscription avec un mail/mot de passe
   *
   * @param value valeurs du formulaire d'inscription
   */
  registerUser(value) {
    console.log(value);
    const that = this;
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.mail, value.mdp)
        .then(function(user) {
          that.createUser(value);
        });
    });
  }

  /**
   * Création d'un utilisateur avec les infos du formulaire
   *
   * @param value valeurs du formulaire
   */
  createUser(value) {
    const postData = {
      prenom: value.prenom,
      nom: value.nom,
      email: value.mail,
      adresse: value.adresse
    };
    console.log(postData);
    this.ngFireAuth.user.subscribe(currentUser => {
      const updates = {};
      updates['/users/' + currentUser.uid] = postData;
      firebase.database().ref().update(updates);
    });
  }

  /**
   * Envoie d'un mail de vérification lors de l'inscription d'un utilisateur
   */
  sendVerificationMail() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verification-email']);
      });
  }

  /**
   * Vérification de l'adresse mail
   */
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false);
  }


  /**
   * Deconnexion de l'utilisateur
   */
  signOut() {
    return this.ngFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

}
