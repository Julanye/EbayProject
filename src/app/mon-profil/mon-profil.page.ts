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
  }

  /**
   * Récupération et affichage des informations de l'utilisateur
   */
  initUser() {
    this.fireService.getUserInformation().then(value => {
      this.mail = value.email;
      this.nom = value.nom;
      this.prenom = value.prenom;
      this.adresse = value.adresse;
    });
  }

  ngOnInit() {
    this.initUser();
  }

}
