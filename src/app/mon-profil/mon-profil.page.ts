import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../entites/firebase.service';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})

/**
 * Classe pour afficher les informations de l'utilisateur
 */
export class MonProfilPage implements OnInit {
  mail;
  nom;
  prenom;
  adresse;

  constructor(private fireService: FirebaseService) {
      //this.initField(); //Ce qui pose pb
  }

  /**
   * Récupération et affichage des informations de l'utilisateur
   */
  initField() {
    this.fireService.getUserInformation().then(function(value) {
      this.mail = value.email;
      this.nom = value.nom;
      this.prenom = value.prenom;
      this.adresse = value.adresse;
    });
  }

  ngOnInit() {
  }

}
